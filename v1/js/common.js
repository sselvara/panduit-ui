//===============================================
// Initiate animation when the element is visible
//================================================
(function() {
	$('.element-animated').waypoint(function(direction) {
	   $(this.element).addClass('fade-in');
	}, {
	  offset: '90%'
	});
})();

//===============================================
// Initiate ellipsis for text
//================================================
(function() {
	$('.line-ellipse').each(function(){
		var lines = $(this).data('lines') ? $(this).data('lines') : 2;
		$(this).ellipsis({ lines: lines, responsive: true });
	});
})();

