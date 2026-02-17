const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');
const { getRandomChartData } = require('./data');

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());

const wss = new WebSocket.Server({ noServer: true });
const clients = new Set();

setInterval(() => {
  const chartData = getRandomChartData();
  const message = JSON.stringify(chartData);
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(message);
  });
}, 5000);

wss.on('connection', (ws) => {
  console.log('✅ Client connected');
  clients.add(ws);
  ws.send(JSON.stringify(getRandomChartData()));
  ws.on('close', () => {
    console.log('❌ Client disconnected');
    clients.delete(ws);
  });
});

const server = require('http').createServer(app);
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 WebSocket ready on ws://localhost:${PORT}`);
});