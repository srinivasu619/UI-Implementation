$(function(){
	$("#typed").typed({
		strings: [
			"This is simply a copy of Typed.js I wanted to create for myself",
			"It doesn't do anything extra that the plugin doesn't already do",
			"It's very easy to use and has some nice built-in customization options",
			"I've thrown in a few comments to help",
			"Try it out!"
		],
		startDelay: 100,
		typeSpeed: 0, 
		cursorChar: "|",
		backSpeed: -100,
		backSpeedDelay: 50,
		backDelay: 500,
		loop: false,
		contentType: 'html', 
		loopCount: false
	});

});