var form = document.getElementById('myForm');

form.addEventListener('submit', saveBookmark);

function saveBookmark(e) {	
	var siteName = document.getElementById('siteName').value;
	
	var URL = document.getElementById('siteUrl').value;
	
	if(!validate(siteName, URL)){
		return false;
	}
	
	var bookmark = {
		name: siteName,
		url: URL
	}
	
	if(localStorage.getItem('bookmarks') === null){
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	else{
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	
	form.reset();
	fetchBookmarks();
	
	e.preventDefault();
}  

function deleteBookmark(url) {
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
	for(var i=0; i<bookmarks.length; i++){
		if(bookmarks[i].url == url){
			bookmarks.splice(i,1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	
	fetchBookmarks();
}

function fetchBookmarks() {
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
	var bookmarkResult = document.getElementById('bookmarkResults');
	bookmarkResults.innerHTML = '';
	for(var i=0; i<bookmarks.length; i++){
		
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;
	
		bookmarkResult.innerHTML += '<div class="well">'+
										'<h3>'+name+
										' <a class="btn btn-default" target="_blank" href="'+url+'">Visit </a>'+
										' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete </a></h3>'+
										'</div>';
	}	
}

function validate(siteName, URL){
	if(!siteName || !URL){
		alert('Please Fill the form');
		return false;
	}
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	
	var regex = new RegExp(expression);
	
	if(!URL.match(regex)){
		alert('Please use valid URL');
		return false;
	}
	return true;
}