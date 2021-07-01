const light = document.querySelector('div.light');

let mouseX = 0;
let mouseY = 0;

let lightX = 0;
let lightY = 0;

let speed = 0.25;

function animate() {
	let distX = mouseX - lightX;
	let distY = mouseY - lightY;
	
	lightX = lightX + (distX * speed);
	lightY = lightY + (distY * speed);
	
	light.style.left = lightX + "px";
	light.style.top = lightY + "px";


	
	requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(event) {
	
	mouseX = event.pageX;
	mouseY = event.pageY;
	document.querySelector('div.light').style.opacity = 1;
	//document.querySelector('#nav').innerHTML = "x = " + mouseX + " et y = " + mouseY;
	
});

$(document).mouseleave(function () {
    document.querySelector('div.light').style.opacity = 0;
});


$('button, .cta, .cta-message, a, #veganburger, .love').mouseover(function() {
	$('div.light').toggleClass('link');
}) 

$('button, .cta, .cta-message, a, #veganburger, .love').mouseout(function() {
	$('div.light').toggleClass('link');
})

$('.light-hover').mouseover(function(){
	var image = $(this).attr("data-hover");
	console.log(image);
	$('div.light').toggleClass('hover');
	$('div.light').css('background-image','url(images/'+ image +'.jpg)');
})

$('.light-hover').mouseout(function(){
	var image = $(this).attr("data-hover");
	//console.log(image);
	$('div.light').toggleClass('hover');
	$('div.light').css('background-image','none');
})

$('.link-video').mouseover(function(){
	
	var image = $(this).attr("data-image");
	
	$('div.light').toggleClass('video');
	$('div.light').css('background-image','url(images/play.png)');
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 console.log('mobile device');
	} else {
		$('body').toggleClass(image);
	}

	
})

$('.link-video').mouseout(function(){
	
	var image = $(this).attr("data-image");
	
	$('div.light').toggleClass('video');
	$('body').toggleClass(image);

	$('div.light').css('background-image','none');

	$("."+image).animate({opacity:0}, 0, function () {this.style.display = "none"})
	$(".cover").css("display", "block");
	$(".cover").fadeTo(300, 1);
})
