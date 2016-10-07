
$(function() {

  //Slide up of locations for a yes click
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('.holiday_locations').slideUp(250, function() {
    });
  });

  //Hiding 'yes' and 'no' buttons
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('#list_click_yes').hide(500, function() {
    });

    $('#list_click_no').hide(500, function() {
    });
  });

  //Appending new text dependent on 'yes' 'no' click
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('.decision_text').replaceWith("<p>The detailed location data from your trip has been removed. This data has been deleted and is no longer accessible.")
  });

  $('#list_click_no').click(function(e) {
    e.preventDefault();

    $('#list_click_yes').hide(500, function() {
    });

    $('#list_click_no').hide(500, function() {
    });
  });

  $('#list_click_no').click(function(e) {
    e.preventDefault();

    $('.decision_text').replaceWith("<p>The detailed location data from your recent trip will be kept and can be viewed at a future date.</p>")
  });

  //Toggle between images dependent on 'yes' or 'no' click
  $('#list_click_yes').click(function(e) {
    e.preventDefault();

    $('.brighton_yes').fadeOut(function() {
      $('.brighton_no').fadeIn();
    });
  });


});
  /*let timerIncrementTime;
  let now = moment().hour(0).minute(0).second(0).subtract(1, 'h');

  let dayData = new Array(24);
  let weekData = new Array(7);
  let monthData = new Array(4);
  let yearData = new Array(12);
  let fiveYearData = new Array(5);

  foo();

  timerIncrementTime = setInterval(function() {
    foo();
  }, 50);

  function foo() {
    now.add(1, 'h');

    pushDataPoint(now.day(), now.hour(), now.week());
    $('#present_date').text(now.format("dddd, D MMMM YYYY"));
    $('#present_time').text(now.format("HH:mm"));
  }

//DAILY DATA
//Building the daily array
  function generateDataPoint(day, hour) {
    let randomPeak = randomIntInc(7, 12);
    let randomOffPeak = randomIntInc(1, 3);;

    if (day >= 1 && day <= 5) {
      // Weekday rules
      if (hour >= 6 && hour < 10) {
        // Peak time: 6am to 10am
        return randomPeak
      } else if (hour >= 19 && hour < 22) {
        // Peak time: 7pm to 10pm
        return randomPeak
      } else {
        // Off peak time: all other times
        return randomOffPeak
      }
    } else {
      // Weekend rules
      if (hour >= 8 && hour < 12) {
        // Peak time: 8am to 12am
        return randomPeak
      } else if (hour >= 18 && hour < 23) {
        // Peak time: 6pm to 11pm
        return randomPeak
      } else {
        // Off peak time: all other times
        return randomOffPeak
      }
    }
  }

//CREATING WEEKLY, MONTHLY & ANNUAL ARRAYS
  function pushDataPoint(day, hour) {

    if (hour == 0) {
      // Average day Array
      weekData.push(sumArray(dayData) / 24);
      //console.log(weekData);
      dayData = new Array(24);

    }

    dayData[hour] = generateDataPoint(day, hour);
    //console.log(dayData);
  }

  function pushMonthData() {
    if (day == 0) {
      monthData.push(sunArray(weekData));
      console.log(monthData);
    }
  }


  // GENERIC FUNCTIONS
  // randomIntInc(low, high): Generates a random number between range,
  // inclusive of range
  function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  function add(a, b) {
    return a + b;
  }

  function sumArray(arr) {
    return arr.reduce(add, 0);
  }
  */
