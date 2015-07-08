
//explaination of the below code
/*When the optionList has been clicked
	remove the active class from the option list (even if it's already there)
	add class active class to optionList
	if there are any option lists that are active
		remove the active class from the child list item
*/
$('.optionList').on('click', function(){

	var $optionListId = $(this).attr('id'); //gets this optionlist's id
	console.log($optionListId + ' optionList has been accessed');


	$('.optionList').removeClass('active');
	console.log($optionListId + '\'s active class removed');
	$(this).addClass('active');
	console.log($optionListId + ' now has an li with class active');


	$('ul ul li').on('click', function(){
		$('li').removeClass('activated');
		$(this).addClass('activated');
	});

	//suppose to remove all li's from the optionlists
	if( $('.active', this).length > 0 ){
		$('li', this).removeClass('active');
	} 

});


/*Prevent default action of going to new page when image is clicked*/

$('#boxWrap img').click(function(event){
	event.preventDefault();
	console.log('default prevented');
});

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

	$('.rightSelect').on('click', function(){
		var activeUL = $('li .active').attr('class'); //gets the id of the ul with active array
		console.log(activeUL);
		var sTLength = $('#mockup li').length; //holds max number of li


	});

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







