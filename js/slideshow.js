//GO TO LINE 26 for function you are currently working on

//When the document is fully loaded and ready to go
$(document).ready(function(){

var arrayOfImages = ['images/styletile1.png', 'images/hollisjones.png', 'images/hollisjones2.png'];
var arrayOfImages2 = ['images/hollisjoneswireframe.png', 'images/hollisjoneswireframe2.png', 'images/hollisjoneswireframe3.png', 'images/hollisjoneswireframe4.png'];
var arrayOfImages3 = ['images/hollisjonesmockup.png', 'images/hollisjonesmockup2.png', 'images/hollisjonesmockup3.png', 'images/hollisjonesmockup4.png'];

/*GLOBAL VARIABLES*/
var spot1Clicked = false;
var spot2Clicked = false;
var spot3Clicked = false;
var imageIndex = 0;
var START_OF_IMAGE_LIST = 0; //placeholder for the start of the image list
var END_OF_IMAGE_LIST = 3; //represents the end of the list 
var LEFT_RESET= 4; //used to reset the right arrow 
var RIGHT_RESET= -1; //used to reset the left arrow
var x = 0; //used for incremental purposes  				
var y= 0;
var z= 0;
var colorIterator = 0; //used for color iterator for bgColorChange function
var interval; //holds the interval value

setPageHeader('Insert Page Title Here'); //used to set the page title. Go ahead and add some text in the () and watch it work!
$('#slideImage').attr('src',$('#option1').prop('href')); //set the current image source to the image in the first href

/*FUNCTIONS*/
function heightOfHeadSection(){

var dbsImageHeight = $('#dbsLogo').height();
var dbsImageHeightPixels = dbsImageHeight + 'px';

$('#head').height(dbsImageHeightsPixels);
}

//gets what the current header is (the one at the top)
function getPageHeader(){
var textHeader = document.getElementById('pageHeader').textContent;

return textHeader;	
}


//Set the main header of the page (the one at the top of the page)
function setPageHeader(newHeader){
var newText = document.getElementById('pageHeader').textContent = newHeader;

return newText;
}


//changes the image of the current slideshow when arrow button is clicked
//selects the next sibling to the currently selected option
function slider(imagePosition){
	var $options = $('.optionList li a');
	var $optionHref= $options[x].getAttribute("href");

//Fade into the next image over a period of time
/*TIP FOR ME: To go back to normal, just switch fadeOut to fadeIn on the top line*/
	$('#boxWrap img').fadeOut(500, function(){

		$(this).fadeIn(500);
		$(this).attr('src', arrayOfImages[imagePosition]);
	}); 
}


/*if x value is the start of the image list
	Reset value so that the next image is the final image*/
function leftSelectClick(startingNumber){
	if(x == START_OF_IMAGE_LIST){
		x = LEFT_RESET; 	
	}
	x--; //decrements global x (4) to move down option list (3)

	if(x >= START_OF_IMAGE_LIST && x <= END_OF_IMAGE_LIST){
		slider();
	} 
}; //end of leftSelectclick function

/*jQuery creations*/

//access the li with class active
//set the li's a href attr to the #boxwrap img src
$('#boxWrap img').attr('src', function(){
	$('ul ul li .active a').attr('href');
});


/*After a list option has been clickedL
	Change the main image to the selected options' href attribute*/
$('.optionList li a').click(function(e){
	e.preventDefault(); //prevents default action of opening new window
	var $anchorHref= $(this).attr('href'); //gets options' href
	$('#boxWrap img').attr('src', $anchorHref); //set attribute to image 

}); //end of image click function

/****************
STATE SWITCHING
****************/

$('#option1 a').click(function(){
	x = 0;//resets image slider back to 0
	console.log('slot one clicked');
	spot1Clicked = true;
	spot2Clicked = false;
	spot3Clicked = false;
});

$('#option2 a').click(function(){
	y = 0;//resets image slider back to 0
	console.log('slot two clicked');
	spot1Clicked = false;
	spot2Clicked = true;
	spot3Clicked = false;
});

$('#option3 a').click(function(){
	z = 0;//resets image slider back to 0
	console.log('slot three clicked');
	spot1Clicked = false;
	spot2Clicked = false;
	spot3Clicked = true;
});

/****************
ARROW CONTROLS
****************/

/*When the right arrow is clicked
	Choose the image after the current*/
$('.rightSelect').on('click',function(){
	if(spot3Clicked == true){
		$('#boxWrap img').attr('src', arrayOfImages3[x]);
			console.log('slot3 imageIndex:'+ x);
			x++;
		}

	if(spot2Clicked == true){
		$('#boxWrap img').attr('src', arrayOfImages2[y]);
			console.log('slot2 imageIndex:'+ y);
			y++;
		}

	if(spot1Clicked == true){
		$('#boxWrap img').attr('src', arrayOfImages[z]);
			console.log('slot1 imageIndex:'+ z);
			z++;
		}
}); //end of rightSelect onClick function

/*When the left arrow is clicked
	Chose the image before the current image*/
$('.leftSelect').on('click',function(){
	leftSelectClick(x);	
}); //end of leftSelect onClick function

}); //end of document ready function
