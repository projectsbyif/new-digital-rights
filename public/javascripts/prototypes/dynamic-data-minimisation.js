$(function() {
  loadDefaultChartConfiguration();

  let timerIncrementTime;
  let now = moment().hour(0).minute(0).second(0);

  timerIncrementTime = setInterval(function() {
    now.add(1, 'h');

    $('#present_date').text(now.format("dddd, D MMMM YYYY"));
    $('#present_time').text(now.format("HH:mm"));
  }, 25);



  var data = {
      labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
      datasets: [
          {
              data: []
          }
      ]
  };

  var ctx = $('#chart_1_day');
  var scatterChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hour'
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'KWh'
          },
          gridLines: {
            display: false
          }
        }]
       }
    }
  });

  //let num = 0;

  //setInterval(function() {
  //  num++;
  //  scatterChart.data.datasets[0].data.push(num);
  //  scatterChart.update();
  //}, 1000);

  function loadDefaultChartConfiguration() {
    Chart.defaults.global.defaultFontColor = '#FFF';
    Chart.defaults.global.defaultFontFamily = "'Calibre-Regular', 'Helvetica Neue', 'Arial', sans-serif";
    Chart.defaults.global.defaultFontSize = '12';
    Chart.defaults.global.defaultFontStyle = 'normal';
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.elements.line.lineTension = 0.1;
    Chart.defaults.global.elements.line.backgroundColor = "rgba(75,192,192,0.4)";
    Chart.defaults.global.elements.line.borderWidth = 1;
    Chart.defaults.global.elements.line.borderColor = "rgba(75,192,192,1)";
    Chart.defaults.global.elements.line.borderCapStyle = 'butt';
    Chart.defaults.global.elements.line.borderDash = [];
    Chart.defaults.global.elements.line.borderDashOffset = 0.0;
    Chart.defaults.global.elements.line.borderJoinStyle = 'miter';
    Chart.defaults.global.elements.line.fill = false;
    Chart.defaults.global.elements.point.radius = 1;
    Chart.defaults.global.elements.point.pointStyle = 'circle';
    Chart.defaults.global.elements.point.backgroundColor = "#fff";
    Chart.defaults.global.elements.point.borderWidth = 8;
    Chart.defaults.global.elements.point.borderColor = "rgba(75,192,192,1)";
    Chart.defaults.global.elements.point.hoverRadius = 8;
    Chart.defaults.global.elements.point.hoverBorderWidth = 2;
    Chart.defaults.global.elements.point.hoverBorderColor = "rgba(220,220,220,1)";
    Chart.defaults.global.elements.point.hoverBackgroundColor = "rgba(75,192,192,1)";
    Chart.defaults.global.elements.point.hitRadius = 10;
  }
});
