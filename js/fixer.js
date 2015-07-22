//explaination of the below code

/*****************************
Clicked Link Funtionality
*****************************/

var $defaultImage = $('ul ul li.active > a').attr('href'); //holds the first image in 
$('#boxWrap img').attr('src', $defaultImage);
var nameOfCompany = $('#pageHeader').html();
var capitalizedCompany= nameOfCompany.toUpperCase();

$('#pageHeader').html(capitalizedCompany);

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


$('ul ul li').on('click', function(e){
		e.preventDefault();
		var nameOfLink = $('ul ul li.active a').html();

		$('ul ul li').removeClass('active');//remove active class from all li elements
		$(this).addClass('active');  //add remove class to THIS li in specific
		$('#boxWrap img').attr('src', $('ul ul li.active a').attr('href'));

		var nameOfLink = $('ul ul li.active a').html();
		$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());
	});

/***************************************
	Arrow Key Functionality
***************************************/

//Logic for Right Arrow Key functionality
$('.rightSelect').on('click', function(){
	var listHref = $('ul ul li.active a').attr('href');
	var startingPoint = 0;

/*For when no section has been clicked*/
	if($('ul ul li').eq(startingPoint).hasClass('active')){
		$('ul ul li').eq(startingPoint).removeClass('active');
		startingPoint++;
		$('ul ul li').eq(startingPoint).addClass('active');

			//used for setting the appropriate name to the top middle part of the page
			var nameOfLink = $('ul.active ul li.active a').html();
			$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());

		$('#boxWrap img').attr('src', $('ul ul li.active a').attr('href'));

		//just in case
		//var startingId = console.log($('ul ul li.active').closest('nav > ul').attr('id'));
	}else{

		/*For when a section has been clicked*/
		var starter = 0;
		var liIndexPosition = $('ul.active ul li.active').index();
		var liIndexPositionCounter = Number(liIndexPosition); //just a checker to make certain a number is being returned rather than a string

		if(liIndexPositionCounter < $('ul.active ul li').length-1){
			if($('ul').hasClass('active') &&  $('ul ul li').hasClass('active')){
				if($('ul.active ul li').eq(0).hasClass('active')){

					$('ul.active ul li').eq(starter).removeClass('active');	
					starter++;
					$('ul.active ul li').eq(starter).addClass('active');

					//used for setting the appropriate name to the top middle part of the page
					var nameOfLink = $('ul.active ul li.active a').html();
					$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());

					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));

				}else{

					$('ul.active ul li').eq(liIndexPositionCounter).removeClass('active');
					liIndexPositionCounter++;
					$('ul.active ul li').eq(liIndexPositionCounter).addClass('active');
					console.log('new Index: ' + liIndexPositionCounter);

					//used for setting the appropriate name to the top middle part of the page
					var nameOfLink = $('ul.active ul li.active a').html();
					$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());


					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));
				}
			} 
		}else if(liIndexPositionCounter == $('ul.active ul li').length-1){
		//This logic is for resetting back to start of list
					$('ul.active ul li').eq(liIndexPositionCounter).removeClass('active');
					liIndexPositionCounter = 0;
					$('ul.active ul li').eq(liIndexPositionCounter).addClass('active');
					console.log('new Index: ' + liIndexPositionCounter);

					//used for setting the appropriate name to the top middle part of the page
					var nameOfLink = $('ul.active ul li.active a').html();
					$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());

					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));

		}

	} 
});


$('.leftSelect').on('click', function(){
	var firstItem = 0; //used to hold 0 index
	var listHref = $('ul ul li.active a').attr('href');
	var startingId = $('ul ul li.active').closest('nav > ul').attr('id');
	var startingPoint = $('ul.active ul li.active').length;//this is the length of the starting optionlist (styleTile)



/*For when no section has been clicked*/
	if($('ul ul li').eq(firstItem).hasClass('active')){
		$('ul ul li').eq(firstItem).removeClass('active');
		$('ul ul li').eq(startingPoint).addClass('active');
		console.log(startingPoint);

		//used for setting the appropriate name to the top middle part of the page
		var nameOfLink = $('ul.active ul li.active a').html();
		$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());


		$('#boxWrap img').attr('src', $('ul ul li.active a').attr('href'));

	}else{
		/*For when a section has been clicked*/
		var starter = 0; //the first list item in the active optionList
		var activeLength = $('ul.active ul li.active').length;//the length of the active optionList

		var liIndexPosition = $('ul.active ul li.active').index();
		var liIndexPositionCounter = Number(liIndexPosition); //just a checker to make certain a number is being returned rather than a string

		if(liIndexPositionCounter >= starter){
			//if the ul and the li have active classes
			if($('ul').hasClass('active') &&  $('ul ul li').hasClass('active')){
				//if the last list element in the optionList is active
				if($('ul.active ul li').eq(activeLength).hasClass('active')){
					$('ul.active ul li').eq(activeLength).removeClass('active');	
					//go to the first element in the list 
					$('ul.active ul li').eq(starter).addClass('active');

						//used for setting the appropriate name to the top middle part of the page
						var nameOfLink = $('ul.active ul li.active a').html();
						$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());

					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));

				}else{

					$('ul.active ul li').eq(liIndexPositionCounter).removeClass('active');
					liIndexPositionCounter--;
					$('ul.active ul li').eq(liIndexPositionCounter).addClass('active');
					console.log('new Index: ' + liIndexPositionCounter);

						//used for setting the appropriate name to the top middle part of the page
						var nameOfLink = $('ul.active ul li.active a').html();
						$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());

					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));
				}
			} 
		}	else if(liIndexPositionCounter < 0){
				if($('ul').hasClass('active') && $('ul ul li').hasClass('active')){
					//This logic is for resetting back to start of list
					$('ul.active ul li').eq(liIndexPositionCounter).removeClass('active');
					liIndexPositionCounter = activeLength;
					$('ul.active ul li').eq(liIndexPositionCounter).addClass('active');
					console.log('new Index: ' + liIndexPositionCounter);
	
						//used for setting the appropriate name to the top middle part of the page
						var nameOfLink = $('ul.active ul li.active a').html();
						$('#headerTitle p').text(nameOfLink+ " " + $('ul.active h1').html());


					$('#boxWrap img').attr('src', $('ul.active ul li.active a').attr('href'));

				}
			}
	} 
});
