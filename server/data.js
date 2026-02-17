function getRandomChartData() {
  return {
    lineChart: {
      type: 'line',
      title: 'Sales Trend',
      data: [
        { x: 1, y: Math.floor(Math.random() * 100) },
        { x: 2, y: Math.floor(Math.random() * 100) },
        { x: 3, y: Math.floor(Math.random() * 100) },
        { x: 4, y: Math.floor(Math.random() * 100) },
        { x: 5, y: Math.floor(Math.random() * 100) }
      ]
    },
    barChart: {
      type: 'bar',
      title: 'Revenue by Region',
      data: [
        { name: 'North', value: Math.floor(Math.random() * 500) },
        { name: 'South', value: Math.floor(Math.random() * 500) },
        { name: 'East', value: Math.floor(Math.random() * 500) },
        { name: 'West', value: Math.floor(Math.random() * 500) }
      ]
    },
    pieChart: {
      type: 'pie',
      title: 'Market Share',
      data: [
        { name: 'Product A', value: Math.floor(Math.random() * 100) },
        { name: 'Product B', value: Math.floor(Math.random() * 100) },
        { name: 'Product C', value: Math.floor(Math.random() * 100) }
      ]
    },
    areaChart: {
      type: 'area',
      title: 'User Growth',
      data: [
        { x: 'Jan', y: Math.floor(Math.random() * 1000) },
        { x: 'Feb', y: Math.floor(Math.random() * 1000) },
        { x: 'Mar', y: Math.floor(Math.random() * 1000) },
        { x: 'Apr', y: Math.floor(Math.random() * 1000) }
      ]
    },
    scatterChart: {
      type: 'scatter',
      title: 'Performance',
      data: Array.from({ length: 10 }, () => ({ x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) }))
    },
    gaugeChart: {
      type: 'gauge',
      title: 'CPU Usage',
      value: Math.floor(Math.random() * 100)
    }
  };
}

module.exports = { getRandomChartData };