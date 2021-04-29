var typist;
		typist = document.querySelector("#typist-element");
		new Typist(typist, {
		  letterInterval: 60,
		  textInterval: 3000
		});


$(function() {
			$('a[href*=#]').on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
			});
		  });