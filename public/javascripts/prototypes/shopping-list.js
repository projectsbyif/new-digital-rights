$(function() {

let listTesco = [4]
let listAsda = [4]
let listMorrisons = [4]
let listTimer = []

$("input").keyup(function() {
  clearInterval(listTimer)
  listTimer = setTimeout(function(){
    function checkListItem(){
      $.getJSON("/public/data/shopping-list.json", function(data) {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
          let market = data[0].json[i];
            console.log(market);
            // IF found place in [$(this.index)]
            // Do this for all supermarkets
            // Sum up totals

            // Else
        };
      });
    };
  }, 1500);
  });
});
