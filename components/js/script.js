S.ready(function(){
	var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
	if(iOS){

		function iosVhHeightBug() {
			var height = s(window).css('height')[0];
			s('.hero').css('min-height', height);
		}

		iosVhHeightBug();
		s(window).on('resize', iosVhHeightBug());

	}  
});