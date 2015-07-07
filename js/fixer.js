
//explaination of the below code
/*When the optionList has been clicked
	remove the active class from the option list (even if it's already there)
	add class active class to optionList
	if there are any option lists that are active
		remove the active class from the child list item
*/
$('.optionList').on('click', function(){
	console.log('optionlist item clicked');
	$('.optionList').removeClass('active');
	console.log('active class removed');
	$(this).addClass('active');
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