/* JavaScript Script for Slideshow */
/* Array storing the images that are going to be included in the slider */
mySlides = new Array('images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg');
var Slide=0;
/* Variable Slide Declared */

/* Function to change the slides each time the forward or back arrows are clicked. The parameter SlideNumber is a variable declaration which can only be used
within this function */
function showSlides(slideNumber)
{

/* Increments Slide each time when an image passes in the SlideShow */
Slide = Slide + slideNumber;

/* If Slide is greater than the length of mySlides -1 */
/* If statement for the forward button of the slide show*/
if (Slide>mySlides.length-1){
	/* Slide equals zero */
	Slide=0
}

/* If slider is less than zero  */
/* If statement for the back button of the slide show*/
if (Slide<0) {
	
	/* 0 = mySlides.length-1 */
	Slide=mySlides.length-1
}
	/* Grabs the ID 'DisplaySlide' and starts the slideshow array*/
	document.getElementById('DisplaySlide').src= mySlides[Slide];

}