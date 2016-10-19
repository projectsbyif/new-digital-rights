$(function() {
  /*
    Fast + major : 0
    Fast + minor : 1
    Slow + major : 2
    Slow + minor : 3
  */
  
  let predefinedRoutes = [
    {
      "identifier": "(0) Via A57",
      "distance": "38 miles",
      "time": "1 hr 11 mins"
    },
    {
      "identifier": "(1) Via M1 and M62",
      "distance": "72.4 miles",
      "time": "1 hr 29 mins"
    },
    {
      "identifier": "(2) Via M1 and M62",
      "distance": "72.4 miles",
      "time": "1 hr 29 mins"
    },
    {
      "identifier": "(3) Via M1 and M62",
      "distance": "72.4 miles",
      "time": "1 hr 29 mins"
    }
  ];

  let useRoute = 0;

  recalculate();

  $('.option a').click(function(e) {
    e.preventDefault();

    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');

    recalculate();
  });

  function recalculate() {
    let quoteAmount = 1000;
    let roadSpeed = $('.section #road_speed .selected').text();
    let roadType = $('.section #road_type .selected').text();
    let passengers = $('.section #passengers .selected').text();
    let time = $('.section #time .selected').text();

    if (roadSpeed === "Slow") {
      quoteAmount += 500;
    } else if (roadSpeed === "Fast") {
      quoteAmount += 750;
    }

    if (roadType === "Minor roads") {
      quoteAmount += 550;
    } else if (roadType === "Major roads") {
      quoteAmount += 300;
    }

    if (passengers === "Driver only") {
      quoteAmount += 100;
    } else if (passengers === "Driver + Passengers") {
      quoteAmount += 500;
    }

    // Choose best route
    if (roadSpeed === "Fast" && roadType === "Major roads") {
      useRoute = 0;
    } else if (roadSpeed === "Fast" && roadType === "Minor roads") {
      useRoute = 1;
    } else if (roadSpeed === "Slow" && roadType === "Major roads") {
      useRoute = 2;
    } else if (roadSpeed === "Slow" && roadType === "Minor roads") {
      useRoute = 3;
    }

    populateMeta(
      predefinedRoutes[useRoute].identifier,
      predefinedRoutes[useRoute].distance,
      predefinedRoutes[useRoute].time);


    if (time === "Day") {
      quoteAmount += 100;
      $('#route_depart').text("Leave between 08:00 and 18:59.");
    } else if (time === "Night") {
      quoteAmount += 450;
      $('#route_depart').text("Leave between 19:00 and 07:59.");
    }

    $('#quote_amount').text(convertToCurrency(quoteAmount));
  }

  function populateMeta(identifier, distance, time) {
    $('#route_identifier').text(identifier);
    $('#route_distance').text(distance);
    $('#route_time').text(time);
  }

  function convertToCurrency(value) {
    const CURRENCY_SYMBOL = "£";
    const SEPERATOR = ".";

    if (!value) {
      return CURRENCY_SYMBOL + "0" + SEPERATOR + "00";
    }

    // Ensure value is a string
    value = value.toString();

    // Pad out values when needed
    if (value.length == 2) {
      value = "0" + value;
    } else if (value.length == 1) {
      value = "00" + value;
    }

    // Construct string
    value = CURRENCY_SYMBOL + value.slice(0, value.length - 2) + SEPERATOR + value.slice(-2);

    return value
  }
});
