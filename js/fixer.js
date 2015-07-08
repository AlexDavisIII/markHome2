
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
	console.log($optionListId + ' now has class active');

	if( $('.active', this).length() > 0 ){
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

when .rightSelect is clicked
	remove active class of prev 'active'
	traverse to sibling or next li
	.addclass 'active' to that slibling or next li
	assign href of current active li to boxwrap img src attr



