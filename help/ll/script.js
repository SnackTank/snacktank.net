let selectElement = document.querySelector('select');


var helpPage = document.getElementById("helpPage");

selectElement.addEventListener('change', function() {
  
  if(selectElement.value == "ll") {
	helpPage.src = 'help/ll/main.html';
	let page = document.getElementById("barOfSide");
	page.innerHTML = '';
	page.innerHTML += '<a href="#" onclick="open2(\'help/ll/main.html/\');">Main Page</a> <br>';
	page.innerHTML += '<a href="#" onclick="open2(\'help/ll/run.html/\');">Running Page</a> <br>';
	page.innerHTML += '<a href="#" onclick="open2(\'help/ll/install.html/\');">How to install</a> <br>';
  }
});

function open2(link) {
	document.getElementById('helpPage').src = link;
}