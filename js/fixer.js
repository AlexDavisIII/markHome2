
//explaination of the below code

/*****************************
Clicked Link Funtionality
*****************************/

var $defaultImage = $('ul ul li.active > a').attr('href'); //holds the first image in 
$('#boxWrap img').attr('src', $defaultImage);


//optionList === specific section of links in the revealed list of options
$('.optionList').on('click', function(){
	var $optionListId = $(this).attr('id'); //gets this optionlist's id
	$('.optionList').removeClass('active'); //removes active class from all optionlists
	$(this).addClass('active'); //adds active class to THIS optionList in specific

	//suppose to remove all li's from the optionlists
	if( $('.active', this).length > 0 ){
		$('> li', this).removeClass('active');
	}
});


$('ul ul li').on('click', function(){
		$('ul ul li').removeClass('active');//remove active class from all li elements
		$(this).addClass('active');  //add remove class to THIS li in specific
	});

/***************************************
	Arrow Key Functionality
***************************************/

//Logic for Right Arrow Key functionality
$('.rightSelect').on('click', function(){
	var listHref = $('ul ul li.active a').attr('href');
	var startingPoint = 0;

//For when no section has been clicked
	if($('ul ul li').eq(startingPoint).hasClass('active')){
		$('ul ul li').eq(startingPoint).removeClass('active');
		$('ul ul li').eq(++startingPoint).addClass('active');
		$('#boxWrap img').attr('src', $('ul ul li.active a').attr('href'));

/*For when a section has been clicked*/
	}else{
			if($('ul').hasClass('active') &&  $('ul ul li').hasClass('active')){
				var starter = 0;
				if($('ul.active ul li').eq(0).hasClass('active')){

					$('ul.active ul li').eq(starter).removeClass('active');	
					starter++;
					$('ul.active ul li').eq(starter).addClass('active');
					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));

				}else{
					var liIndexPosition = $('ul.active ul li.active').index();
					var liIndexPositionCounter = Number(liIndexPosition); //just a checker to make certain a number is being returned rather than a string

					console.log(liIndexPositionCounter);

					$('ul.active ul li').eq(liIndexPositionCounter).removeClass('active');
					liIndexPositionCounter++;
					$('ul.active ul li').eq(liIndexPositionCounter).addClass('active');
					console.log('new Index: ' + liIndexPositionCounter);
					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));
				}
			}
	}
});






