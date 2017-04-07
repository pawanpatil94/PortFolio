$(document).ready(function(){
	var quote;
	var author;	

	function loadQuote(){
		var color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	var temp = Math.floor(Math.random() * (5));
	$('body, #changeQuote').css('background-color', color[temp]);
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			data: {
				method: 'getQuote', 
				lang: 'en',
				format: 'jsonp'
			},
			jsonp: 'jsonp',
			dataType: 'jsonp',
			success: function(data){
				quote = data.quoteText;
				if(data.author)
					author = '--said by '+ data.author;
				else
					author = '--said by Anonymous';
				
				$('#author').text(author);	
				$('#quote').text(" "+quote).css("font-size", "25px");
			}
		});
	}
	loadQuote();
	
	$('#changeQuote').on('click', function(event){
		event.preventDefault();
		loadQuote();
		function change(){
			
			var color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
			var temp = Math.floor(Math.random() * (5));
			
			$('body, #changeQuote').css('background-color', color[temp]);	
			$("i, #quote, #author").css('color', color[temp]);			
		}
		change();
		
	});
	
});