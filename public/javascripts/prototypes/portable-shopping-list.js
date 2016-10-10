$(function() {
    const CURRENCY_SYMBOL = "£";
    const SEPERATOR = ".";

    let listTesco = new Array(10);
    let listAsda = new Array(10);
    let listMorrisons = new Array(10);

    let listTimer = new Array(10);

    listTesco.fill(null);
    listAsda.fill(null);
    listMorrisons.fill(null);

    $('.button_fill_basket').click(function(e) {
      e.preventDefault();

      $('#results').fadeOut(250);
      $('#checkout').fadeIn(250);
    });

    $('#top_list input').first().focus();

    $('#top_list input').keyup(function() {
        let val = $(this).val();
        let index = $(this).index();

        clearInterval(listTimer[index]);

        listTimer[index] = setTimeout(function() {
            checkListItem(val, index);
        }, 1500);
    });

    // Getting shopping list favourites and populating the 'input' elements
    function getFavourites() {
      $.getJSON("/public/data/shopping-list-favourites.json", function(data) {
        for (let item in data.tesco) {
          $('#top_list input').eq(item).val(data.tesco[item].tag);
        }
      }).done(function() {
        $('#top_list input').each(function(index, value) {
          checkListItem($(this).val(), index);
        });
      });
    }

    getFavourites();

    function checkListItem(searchQuery, index) {
        $.getJSON("/public/data/shopping-list.json", function(data) {

            //$("#top_list input")[4].focus(index);
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

            // Loop through Morrisons
            for (let product in data.morrisons) {
                let query = searchQuery.toLowerCase();
                let comparator = data.morrisons[product].tag.toLowerCase();

                if (query === comparator) {
                    listMorrisons[index] = data.morrisons[product];
                    break
                } else {
                    listMorrisons[index] = null;
                }
            }

            let totalMorrisons = 0;

            for (let product in listMorrisons) {
                if (listMorrisons[product]) {
                    totalMorrisons += listMorrisons[product].price;
                }
            }

            $('#results_morrisons .total_cost').text(convertToCurrency(totalMorrisons));

            // Loop throuh Asda
            for (let product in data.asda) {
                console.log(data.asda)
                let query = searchQuery.toLowerCase();
                let comparator = data.asda[product].tag.toLowerCase();

                if (query === comparator) {
                    listAsda[index] = data.asda[product];
                    break
                } else {
                    listAsda[index] = null;
                }
            }

            let totalAsda = 0;

            for (let product in listAsda) {
                if (listAsda[product]) {
                    totalAsda += listAsda[product].price;
                }
            }

            $('#results_asda .total_cost').text(convertToCurrency(totalAsda));

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
