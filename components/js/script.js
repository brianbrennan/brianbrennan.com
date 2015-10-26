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

	//----------------------Header


	document.addEventListener('scroll', function(){
		
		var height = Number(s('.hero').css('height')[0].substr(0, s('.hero').css('height')[0].length - 2));

		if(document.body.scrollTop > height || typeof height === 'undefined'){
			s('header').removeClass('dark');
		} else {
			s('header').class('dark');
		}
	});
});