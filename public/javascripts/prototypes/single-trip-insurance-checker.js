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
    let roadType = $('.section #road_type .selected').text();
    let passengers = $('.section #passengers .selected').text();


    if (roadType === "Minor roads") {
      quoteAmount += 550;
    } else if (roadType === "Major roads") {
      quoteAmount += 300;
    }

    if (passengers === "Driver only") {
      quoteAmount += 100;
    } else if (passengers === "+ Passengers") {
      quoteAmount += 500;
    }

    populateMeta(
      predefinedRoutes[useRoute].identifier,
      predefinedRoutes[useRoute].distance,
      predefinedRoutes[useRoute].time);

    $('#quote_amount').text(convertToCurrency(quoteAmount));
    $('#quote_amount_2').text(convertToCurrency(quoteAmount));
    $('#quote_amount_3').text(convertToCurrency(quoteAmount));
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

  $('#get_route').click(function(e) {
    e.preventDefault();

    $('.hide_journey').fadeOut(250, function() {
      $('.hide_route').delay(750).fadeIn(500);
    });

  });

  $('#quote_yes').click(function(e) {
    e.preventDefault();

    $('.hide_route').fadeOut(250, function() {
      $('.hide_options').delay(750).fadeIn(500);
    });

    recalculate();
  });

  $('#quote_accept').click(function(e) {
    e.preventDefault();

    $('.hide_options').fadeOut(250, function() {
      $('.hide_quote').delay(750).fadeIn(500);
    });

    recalculate();
  });

  $('#concern_button').click(function(e) {
    e.preventDefault();

    $('#concern_button').fadeOut(250,  function() {
      $('#reported_button').delay(750).fadeIn(500);
    });
  });

});
