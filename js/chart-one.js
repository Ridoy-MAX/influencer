
var d_2options2 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 280,
    // background: '#27272F',
    // borderColor: '#27272F',
    sparkline: {
      enabled: true
    },
  },


  colors: ['#FA890A', '#66DA26'],




  grid: {
   
  },
  
  stroke: {
    borderColor: ["#936738"],
      curve: 'smooth',
      width: 2
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Sales',
    data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40,20,30]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  yaxis: {
    min: 0
  },
        grid: {
          row: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          },
          column: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          },
          show: true,
        
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },   
          yaxis: {
              lines: {
                  show: false
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },  
      },
  fill: {
      type:"gradient",
      colors: ['#F77D12']
  },
  tooltip: {
    x: {
      // show: false,
    },
 
  },

}


