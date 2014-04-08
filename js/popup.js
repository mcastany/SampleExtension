
 function initialize(){
   
   $( "#sortable" ).sortable({
      revert: true
    });

    $( "ul, li" ).disableSelection();
 };
  
  
 function reviewPage(){
	chrome.tabs.query({active: true, windowId : chrome.windows.WINDOW_ID_CURRENT},function(tab) {
		$('#url').innerHtml = "The URL is: " + tab[0].url;
	});
}
chrome.extension.onRequest.addListener(function(links) {
  for (var index in links) {
    
  }
});


window.onload = function() {
  document.addEventListener('DOMContentLoaded', function () {
	  initialize();
	  
	  reviewPage();
	});
};


