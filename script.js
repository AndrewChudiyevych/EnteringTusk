jQuery(function() {
	$('#rows').click(function() {
		$('.articles-first-square').removeClass("articles-first-square").addClass("articles");
		$('.articles-second-square').removeClass("articles-second-square").addClass("articles-second");
		$('.articles-third-square').removeClass("articles-third-square").addClass("articles-third");
		$('.buyButton-square').removeClass("buyButton-square").addClass("buyButton");
		$('.article-1-square').removeClass("article-1-square").addClass("article-1");
		$('.article-2-square').removeClass("article-2-square").addClass("article-2");
		$('.article-3-square').removeClass("article-3-square").addClass("article-3");
		$('.article-4-square').removeClass("article-4-square").addClass("article-4");
		$('.article-5-square').removeClass("article-5-square").addClass("article-5");
		$('.article-6-square').removeClass("article-6-square").addClass("article-6");
		$('.article-7-square').removeClass("article-7-square").addClass("article-7");
		$('.article-8-square').removeClass("article-8-square").addClass("article-8");
		$('.article-9-square').removeClass("article-9-square").addClass("article-9");
		$('.article-1-img-square').removeClass("article-1-img-square").addClass("article-1-img");
		$('.article-1-text-square').removeClass("article-1-text-square").addClass("article-1-text");
	});
});

jQuery(function() {
	$('#squares').click(function() {
		$('.articles').removeClass("articles").addClass("articles-first-square");
		$('.articles-second').removeClass("articles-second").addClass("articles-second-square");
		$('.articles-third').removeClass("articles-third").addClass("articles-third-square");
		$('.buyButton').removeClass("buyButton").addClass("buyButton-square");
		$('.article-1').removeClass("article-1").addClass("article-1-square");
		$('.article-2').removeClass("article-2").addClass("article-2-square");
		$('.article-3').removeClass("article-3").addClass("article-3-square");
		$('.article-4').removeClass("article-4").addClass("article-4-square");
		$('.article-5').removeClass("article-5").addClass("article-5-square");
		$('.article-6').removeClass("article-6").addClass("article-6-square");
		$('.article-7').removeClass("article-7").addClass("article-7-square");
		$('.article-8').removeClass("article-8").addClass("article-8-square");
		$('.article-9').removeClass("article-9").addClass("article-9-square");
		$('.article-1-img').removeClass("article-1-img").addClass("article-1-img-square");
		$('.article-1-text').removeClass("article-1-text").addClass("article-1-text-square");
	});
});
