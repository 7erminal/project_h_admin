class WLineGraph {
    drawGraph(v, v2, h, id= ""){
        console.log("Params received are ")
        console.log(v)
        console.log(h)
        console.log(Math.floor(Math.max(...v)/20))

        try {

            // Recent Report 3
            const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
            const bd_brandService3 = 'rgba(0,173,95,0.9)';
            const brandProduct3 = 'transparent';
            const brandService3 = 'transparent';
        
            var data5 = v;
            var data6 = v2;
        
            var ctx = document.getElementById(id == "" ? "recent-rep3-chart" : id);
            if (ctx) {
              ctx.height = 230;
              var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                  labels: h,
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: brandService3,
                      borderColor: bd_brandService3,
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 0,
                      data: data5,
                      pointBackgroundColor: bd_brandService3
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: brandProduct3,
                      borderColor: bd_brandProduct3,
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 0,
                      data: data6,
                      pointBackgroundColor: bd_brandProduct3
        
                    }
                  ]
                },
                options: {
                  maintainAspectRatio: false,
                  legend: {
                    display: false
                  },
                  responsive: true,
                  scales: {
                    xAxes: [{
                      gridLines: {
                        drawOnChartArea: true,
                        color: '#f2f2f2'
                      },
                      ticks: {
                        fontFamily: "Poppins",
                        fontSize: 12
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.floor(Math.max(...v)/20) != 0 ? Math.floor(Math.max(...v)/20) : 1,
                        max: Math.max(...v)+5,
                        fontFamily: "Poppins",
                        fontSize: 12
                      },
                      gridLines: {
                        display: false,
                        color: '#f2f2f2'
                      }
                    }]
                  },
                  elements: {
                    point: {
                      radius: 3,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                      backgroundColor: '#333'
                    }
                  }
        
        
                }
              });
            }
        
          } catch (error) {
            console.log(error);
          }
    }

    pieGraph(names, data, id = "", type = ""){
      try {

        // Percent Chart 2
        var ctx = document.getElementById(id == "" ? "percent-chart2" : id);
        if (ctx) {
          ctx.height = 209;
          var myChart = new Chart(ctx, {
            type: type == "" ? 'doughnut' : type,
            data: {
              datasets: [
                {
                  label: "My First dataset",
                  data: data,
                  backgroundColor: [
                    '#00b5e9',
                    '#fa4251',
                    '#fcf90d',
                    '#ff9700',
                    '#01ff1f',
                    '#ff01f7',
                    '#01d9ff',
                    '#bfbfbf',
                    '#00ff83',
                    '#0097ff',
                    '#ffd117',
                    '#eaff17'
                  ],
                  hoverBackgroundColor: [
                    '#00b5e9',
                    '#fa4251',
                    '#fcf90d',
                    '#ff9700',
                    '#01ff1f',
                    '#ff01f7',
                    '#01d9ff',
                    '#bfbfbf',
                    '#00ff83',
                    '#0097ff',
                    '#ffd117',
                    '#eaff17'
                  ],
                  borderWidth: [
                    0, 0
                  ],
                  hoverBorderColor: [
                    'transparent',
                    'transparent'
                  ]
                }
              ],
              labels: names
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              // cutoutPercentage: 87,
              animation: {
                animateScale: true,
                animateRotate: true
              },
              legend: {
                display: false,
                position: 'bottom',
                labels: {
                  fontSize: 14,
                  fontFamily: "Poppins,sans-serif"
                }
    
              },
              tooltips: {
                titleFontFamily: "Poppins",
                xPadding: 15,
                yPadding: 10,
                caretPadding: 0,
                bodyFontSize: 16,
              }
            }
          });
        }
    
      } catch (error) {
        console.log(error);
      }
    }
}

export default WLineGraph