$(function(){$("#show_permissions_dialog").click(function(n){n.preventDefault(),$(".sample_container").fadeOut(250,function(){$(".permissions_container").fadeIn(250)})}),$("#allow_ad").click(function(n){n.preventDefault(),$(".permissions_container").fadeOut(250,function(n){$("#show_permissions_dialog").text("Thank you."),$(".sample_container").fadeIn(250)}),$("#sponsored_text, #show_permissions_dialog").fadeOut(250,function(){$("#hidden_text").fadeIn(250)})}),$("#deny_ad").click(function(n){n.preventDefault(),$(".permissions_container").fadeOut(250,function(n){$(".deny_ad_container").fadeIn(250)})})});