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



	//---------------------Pre tag styling

	
	//---------------------Navigation for Mobile

	S.ready(function(){
	s('.nav-toggle').on('click', function(){
		if(window.innerWidth <= 780){
			if(!s('.nav-list').hasClass('active')[0])
				s('.nav-list').addClass('active');
			else
				s('.nav-list').removeClass('active');
			if(!s(this).hasClass('active')[0])
				s(this).addClass('active');
			else
				s(this).removeClass('active');
		}

	});

	s('.nav-list a').on('click', function(){
		if(window.innerWidth <= 780){
			s('.nav-list').removeClass('active');
			s('.nav-toggle').removeClass('active');
		}
	});

});

});