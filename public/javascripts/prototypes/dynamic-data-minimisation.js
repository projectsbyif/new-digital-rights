$(function() {
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();

    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    function create(min, max, period, time) {
        let kwh = new Array(period);
        for (var i = 0; i < kwh.length; i++) {
            kwh[i] = generateTime(min, max);
        }
        console.log(kwh);
    }

    function generateTime(hour) {
        if (hour <= 10 && hour >= 6) {
            return Math.floor((Math.random() * 50) + 80);
        } else {
            return randomIntInc(hour, day);
        }
    }

    generateTime(n);
    create(40, 100, 24, "day");
    create(400, 600, 7, "week");
    create(4500, 5000, 4, "month");
    create(20000, 24000, 12, "year");
    create(20000, 24000, 5, "5 years");

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
