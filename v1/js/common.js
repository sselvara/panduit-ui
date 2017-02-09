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

