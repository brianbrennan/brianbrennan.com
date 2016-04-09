angular.module('homeCtrl', [])

	.controller('homeController', function(){
		var i = 1;
		s('.p').each(function(){
			s('.p-' + i).css('top', Math.random() * (100 - 10) + 10 + '%')
				.css('animation-duration', Math.random() * (20 - 5) + 5 + 's');
			i++;
		});
	});
