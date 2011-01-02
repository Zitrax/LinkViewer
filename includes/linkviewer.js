window.addEventListener('DOMContentLoaded', function() {
	var links = document.getElementsByTagName('a');
    for (var i = 0; i<links.length; i++) {
		var common = links[i].href.replace(document.location.protocol + "//" + document.location.host + "/","");
		links[i].innerHTML = links[i].innerHTML + "<span style=\"font-size: 50%;\">(" + common + ")</span>"; 
    }
}, false);