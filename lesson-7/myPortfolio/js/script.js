$(document).ready(function(){
    $('#slides').superslides({

        animation: 'fade' ,
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["I am a Software Developer", "I am a Trojan", "I am an Scoper"],
		smartBackspace: true,
		typeSpeed: 70,
		backSpeed: 35,
		loop: true,
		startDelay: 1000,
		showCursor: false
    });
       
});