$(function(){$("#contents").hide().addClass("hideable"),$("#close_contents").show(),$("#link_contents").click(function(n){n.preventDefault(),$("#contents").css({right:-$("#contents").outerWidth()}).show().animate({right:0},250,function(){$(window).width()<800&&$("body").children().not("#contents").hide()})}),$("#close_contents").click(function(n){n.preventDefault(),$("body").children().not("#contents").show(),$("#contents").animate({right:-$("#contents").outerWidth()},250,function(){$("#contents").hide()})}),$(window).on("resize",function(){$(window).width()<800&&$("#contents").is(":visible")?$("body").children().not("#contents").hide():$(window).width()>800&&$("#contents").is(":visible")&&$("body").children().not("#contents").show()})});