$(document).ready(function(){	// executed after page load
	loadPage('default');
	checkURL();					// check if url has reference to a local page

	$('ul li a').click(function(e){
		checkURL(this.hash);    // assign this onclick to links
	});

	setInterval("checkURL()", 250);	// check for changed url
});

var lastURL = "";

function checkURL(hash)
{
	if (!hash)
		hash = window.location.hash;

	if (hash != lastURL)
	{
		lastURL = hash;
		loadPage(hash);
	}
}

function loadPage(url)
{

var datastring=url.replace('#','pages/');    //strip the # and leave only the page name

$.ajax({    //create an ajax request to load_page.php
    type: "POST",
    url: "load_file.php",
    data: 'datastring='+datastring,   //add datastring here
    dataType: "html",   //expect html to be returned
    async: false,
    success: function(msg){

        if(parseInt(msg)!=0)    //if no errors
        {
            $('#center').html(msg);    //load the returned html into pageConte
        }
    }

});
}
