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

	// s('.nav-toggle').on('click', function(){
	// 	if(!s('.nav-list').hasClass('active')[0])
	// 		s('.nav-list').addClass('active');
	// 	else
	// 		s('.nav-list').removeClass('active');
	// 	if(!s(this).hasClass('active')[0])
	// 		s(this).addClass('active');
	// 	else
	// 		s(this).removeClass('active');

	// });

	// s('.nav-toggle').on('touchend', function(){
	// 	if(!s('.nav-list').hasClass('active')[0])
	// 		s('.nav-list').addClass('active');
	// 	else
	// 		s('.nav-list').removeClass('active');
	// 	if(!s(this).hasClass('active')[0])
	// 		s(this).addClass('active');
	// 	else
	// 		s(this).removeClass('active');
	// });

	// s('.nav-list a').on('click', function(){
	// 	s('.nav-list').removeClass('active');
	// 	s('.nav-toggle').removeClass('active');
	// });

	// s('.nav-list a').on('touchend', function(){
	// 	s('.nav-list').removeClass('active');
	// 	s('.nav-toggle').removeClass('active');
	// });




	// var didScroll;
	// var lastScrollTop = 0;
	// var delta = 5;
	// var navbarHeight = Number(s('header').css('height')[0].substr(0,s('header').css('height')[0].length - 2));

	// window.addEventListener('scroll', function(){
	// 	didScroll = true;
	// });

	// setInterval(function() {
	// 	if(didScroll){
	// 		hasScrolled();
	// 		didScroll = false;
	// 	}
	// }, 250);

	// function hasScrolled(){
	// 	var st = s('header')[0].offsetTop;
	// 	console.log(st);
	// }
});

