$(function() {
  const CURRENCY_SYMBOL = "£";
  const SEPERATOR = ".";

  let listTesco = new Array(10);
  let listAsda = new Array(10);
  let listMorrisons = new Array(10);

  let listTimer = new Array(10);

  listTesco.fill(null);

  $('#shopping_list input').keyup(function() {
    let val = $(this).val();
    let index = $(this).index();

    clearInterval(listTimer[index]);

    listTimer[index] = setTimeout(function() {
      checkListItem(val, index);
    }, 1500);
  });

  function checkListItem(searchQuery, index) {
    $.getJSON("/public/data/shopping-list.json", function(data) {
      // Loop through Tesco
      for (let product in data.tesco) {
        let query = searchQuery.toLowerCase();
        let comparator = data.tesco[product].tag.toLowerCase();

        if (query === comparator) {
          listTesco[index] = data.tesco[product];
          break
        } else {
          listTesco[index] = null;
        }
      }

      let totalTesco = 0;

      for (let product in listTesco) {
        if (listTesco[product]) {
          totalTesco += listTesco[product].price;
        }
      }

      $('#results_tesco .total_cost').text(convertToCurrency(totalTesco));

      // Loop through Asda


      // Loop throuh Morrisons
    });
  }

  function convertToCurrency(value) {
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
