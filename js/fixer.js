
//explaination of the below code
/*When the optionList has been clicked
	remove the active class from the option list (even if it's already there)
	add class active class to optionList
	if there are any option lists that are active
		remove the active class from the child list item
*/

var $defaultImage = $('ul ul li.active > a').attr('href'); //holds the first image in 
$('#boxWrap img').attr('src', $defaultImage);


$('.optionList').on('click', function(){

	var $optionListId = $(this).attr('id'); //gets this optionlist's id
	console.log($optionListId + ' optionList has been accessed');

	$('.optionList').removeClass('active');
	console.log($optionListId + '\'s active class removed');
	$(this).addClass('active');
	console.log($optionListId + ' now has an li with class active');

	//suppose to remove all li's from the optionlists
	if( $('.active', this).length > 0 ){
		$('> li', this).removeClass('active');
	} 
});

$('ul ul li').on('click', function(){
		$('ul ul li').removeClass('active');
		$(this).addClass('active'); 
	});

/*******************************************************************************
					PLEASE READ WHEN YOU COME BACK TOMORROW!
				complete below only if you haven't done it at home
*******************************************************************************/

/*When .rightSelect is clicked
	if ul ul li hasclass active

		remove '.active' class from currently active li (in ul ul li)
		add class of active to the sibling li
		set img src to href of currently active li 
 */


$('.rightSelect').on('click', function(){
	var listHref = $('ul ul li.active a').attr('href');
	var startingPoint =0;
/*For when no section has been clicked*/
	if($('ul ul li').eq(startingPoint).hasClass('active')){
		$('ul ul li').eq(startingPoint).removeClass('active');
		$('ul ul li').eq(++startingPoint).addClass('active');
		$('#boxWrap img').attr('src', $('ul ul li.active a').attr('href'));

/*For when a section has been clicked*/
	}else if($('#styleTile').hasClass('active')){
		//beginning of StyleTile configurations
			var lengthOfSection = $('#styleTile ul li').length;
		    if($('#styleTile ul li').hasClass('active') && startingPoint < lengthOfSection){
				$('#styleTile ul li').eq(startingPoint).removeClass('active');
				$('#styleTile ul li').eq(++startingPoint).addClass('active');
				$('#boxWrap img').attr('src', $('#styleTile ul li.active a').attr('href'));
				console.log(startingPoint);
		}//end of StyleTile section configurations
	}

/**/


	
});


/*Prevent default action of going to new page when image is clicked*/
/*$('#boxWrap img').click(function(event){
	event.preventDefault();
	console.log('default prevented');
});*/

/*
if already active do something else? (if hasclass)
remove parent ul active classes
remove all active classes
add active to clicked parent
add class to clicked sub item '.active'


for arrows
if is first disable prev
if is last disable next
if click arrow and not first 2 then do next,prev slector and toggle class
*/


/********************
My Take For Arrows
/********************/
/*

when .rightSelect is clicked
	
	if the end of the ul has been reached
		remove 'active' class from current li
		traverse the to first child in the ul
		addclass 'active' to first child in ul
		assign href of current active li to boxwrap
*/

/*
	if the previous adjacent sibling has class active
		remove active class of prev li
		traverse to sibling or next li
		.addclass 'active' to that slibling or next li
		assign href of current active li to boxwrap img src attr
	otherwise (else) if the next adjacent sibling has class active
		remove active class from next li
		traverse to sibling or prev li
		.addclass 'active' to that sibling or prev li
		assign href of current active li to boxwrap img src attr
*/







