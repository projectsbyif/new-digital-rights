$(function() {

  $.getJSON("/public/data/shopping-list.json", function(data) {
    console.log(data);
  });
  
});




// Finding similar words via regular expressions
/*
var name = "apples";
var search = "apples";

var tests = ['apples', 'apple', 'bag of apples'];
var isMatch = false;

for (i = 0; i < tests.length; i++) {
    if (search.test(tests[i])) {
        isMatch = true;
    }
}

alert(isMatch)
*/
