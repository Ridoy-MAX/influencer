const ctx = document.getElementById('myChart1').getContext('2d');
const ctx1 = document.getElementById('doughnut').getContext('2d');
const ctx2 = document.getElementById('doughnut1').getContext('2d');
// const ctx1 = document.getElementById('myChart2').getContext('2d');


const ctx3 = document.getElementById('lineChart1').getContext('2d');
const ctx4 = document.getElementById('lineChart2').getContext('2d');
const ctx5 = document.getElementById('lineChart3').getContext('2d');




  const doughnut = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: [ ],
      datasets: [

                {
                label: 'it was',
                backgroundColor: [
                  '#9e5d16',
                  '#202028',
                  '#583b21',
               
                ] ,
             
                borderColor: '#27272f',
                pointBackgroundColor:"#FB890C",
                tension:0.5,
                data: [25, 50, 75,  ],
                fill:true,
              },
        



        
      ]
    },
  });
  const doughnut1 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: [ ],
      datasets: [

                {
                label: 'it was',
                backgroundColor: [
                  '#9e5d16',
                  '#202028',
                  '#583b21',
               
                ] ,
             
                borderColor: '#27272f',
                pointBackgroundColor:"#FB890C",
                tension:0.5,
                data: [25, 50, 75,  ],
                fill:true,
              },
        



        
      ]
    },
  });



  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [

                {
                label: 'it was',
                backgroundColor: '#FB890C' ,
                borderColor: '#f1681f',
                pointBackgroundColor:"#FB890C",
                tension:0.5,
                data: [25, 50, 75, 100, 5, ],
                fill:true,
              },
                {
                label: 'became',
                backgroundColor: '#F06520',
                borderColor: '#FB890C',
                pointBackgroundColor:"#FB890C",
                tension:0.5,
                data: [50, 25, 100, 75, 20, ],
                fill:true,
              }



        
      ]
    },
  });
  // const myChart2 = new Chart(ctx1, {
  //   type: 'line',
  //   data: {
  //     labels: ['jan' ,'feb' ,'Marc', 'Apr', 'May', 'Jun', 'Jul' ,'aug', 'sep', 'nov', 'dec','jan' ,'feb' ,'Marc', 'Apr', 'May', 'Jun', 'Jul' ,'aug', 'sep', 'nov', 'dec'],
  //     datasets: [{
  //       label: '',
  //       data: [10, 19, 15, 22, 24, 27,15,20,25,20,10, 19, 15, 22, 13, 30,10,20,15,20,12,8],
  //       backgroundColor: 'rgba(251, 135, 12, 0.188)' ,
  //       fill: true,
  //       borderWidth: 1,
  //       borderWidth:1,
  //       borderColor:'#F26E23',
  //       hoverBorderWidth:9,
  //       hoverBorderColor:'#F26E23',
  //       borderWidth: 3,
  //       // tension: 0.5,
  //       pointRadius: 1,
        
  //     }]
  //   },
  //   options:{
  //     title:{
  //       display:true,
  //       text:'Largest Cities In Massachusetts',
  //       fontSize:25
  //     },
  //     legend:{
  //       display:false,
  //       position:'right',
  //       labels:{
  //         fontColor:'#fff'
  //       }
  //     },
  //     layout:{
  //       padding:{
  //         left:50,
  //         right:0,
  //         bottom:0,
  //         top:0
  //       }
  //     },
  //     tooltips:{
  //       enabled:true
  //     }
  //   }
 


  // })
  


  const lineChart1 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['mar 26' ,'28' ,'Mar 30', '01', 'Mar 30', '01', ],
      datasets: [{
        label: 'likes',
        data: [10, 5, 8, 2, 6, 8,],
        backgroundColor: 'rgba(251, 135, 12, 0.288)' ,
        fill: false,
        borderWidth: 1,
        borderWidth:1,
        borderColor:'#F26E23',
        hoverBorderWidth:9,
        hoverBorderColor:'#F26E23',
        borderWidth: 3,
        // tension: 0.5,
        pointRadius: 4,
        
      }]
    },
    options:{
   
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#fff'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
 


  })


  const lineChart2 = new Chart(ctx4, {
    type: 'line',
    data: {
      labels: ['1.00' ,'3.00' ,'4.00', '6.00', '7.00', '8.00', ],
      datasets: [

        {
        label: 'it was',
        backgroundColor: '#FB890C' ,
        borderColor: '#f1681f',
        pointBackgroundColor:"#333637",
        tension:0.5,
        data: [5, 5, 10, 4, 6, 0,],
        fill:false,
        borderWidth: 3,
      },
        {
        label: 'became',
        backgroundColor: '#F06520',
        borderColor: '#333637',
        pointBackgroundColor:"#333637",
        tension:0.5,
        data: [5, 7, 2, 8, 6, 8,],
        fill:false,
        borderWidth: 3,
      }




]
    },
    options:{
      title:{
        display:true,
        text:'Largest Cities In Massachusetts',
        fontSize:25
      },
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#fff'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
 


  })
  const lineChart3 = new Chart(ctx5, {
    type: 'line',
    data: {
      labels: ['jan' ,'feb' ,'Marc', 'Apr', 'May', 'Jun', 'Jul' ,'aug', 'sep', 'nov', 'dec','jan' ,'feb' ,'Marc', 'Apr', 'May', 'Jun', 'Jul' ,'aug', 'sep', 'nov', 'dec'],
      datasets: [{
        label: 'likes',
        data: [10, 19, 15, 22, 24, 27,15,20,25,20,10, 19, 15, 22, 13, 30,10,20,15,20,12,8],
        backgroundColor: 'rgba(251, 135, 12, 0.188)' ,
        fill: true,
        borderWidth: 1,
        borderWidth:1,
        borderColor:'#F26E23',
        hoverBorderWidth:9,
        hoverBorderColor:'#F26E23',
        borderWidth: 3,
        // tension: 0.5,
        pointRadius: 1,
        
      }]
    },
    options:{
      title:{
        display:true,
        text:'Largest Cities In Massachusetts',
        fontSize:25
      },
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#fff'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
 


  })





// let Chart = document.getElementById('Chart').getContext('2d');

// Global Options





// let Chart = new Chart(Chart, {
//   type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data:{
//     labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
//     datasets:[{
//       label:'Population',
//       data:[
//         617594,
//         181045,
//         153060,
//         106519,
//         105162,
//         95072
//       ],
//       //backgroundColor:'green',
//       backgroundColor:[
//         'rgba(255, 99, 132, 0.6)',
//         'rgba(54, 162, 235, 0.6)',
//         'rgba(255, 206, 86, 0.6)',
//         'rgba(75, 192, 192, 0.6)',
//         'rgba(153, 102, 255, 0.6)',
//         'rgba(255, 159, 64, 0.6)',
//         'rgba(255, 99, 132, 0.6)'
//       ],
//       borderWidth:1,
//       borderColor:'#777',
//       hoverBorderWidth:3,
//       hoverBorderColor:'#000'
//     }]
//   },
//   options:{
//     title:{
//       display:true,
//       text:'Largest Cities In Massachusetts',
//       fontSize:25
//     },
//     legend:{
//       display:true,
//       position:'right',
//       labels:{
//         fontColor:'#000'
//       }
//     },
//     layout:{
//       padding:{
//         left:50,
//         right:0,
//         bottom:0,
//         top:0
//       }
//     },
//     tooltips:{
//       enabled:true
//     }
//   }
// });

  















  
