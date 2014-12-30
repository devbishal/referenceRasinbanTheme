/*

My Custom JS
============

Author:  Bishal Thapa
Updated: December 2014
Notes:	 Hand coded for rasinban in reference to brad hussey 

*/

$(function(){
	$('#alertMe').click(function(e){
		e.preventDefault();

		$('#successAlert').slideDown();
	});
});