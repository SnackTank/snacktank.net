let selectElement = document.querySelector('select');

var softwarePage = document.getElementById("softwarePage");

selectElement.addEventListener('change', function() {
  if(selectElement.value == "javaPong") {
	softwarePage.height = "75%"
	softwarePage.src = 'funstuff/javapong.html';
  }
  if(selectElement.value == "ll") {
	softwarePage.height = "78%"
	softwarePage.src = 'funstuff/laserlabyrinth.html';
  }
  if(selectElement.value == "numB3rz") {
	softwarePage.height = "32%"
	softwarePage.src = 'funstuff/numB3rz.html';
  }
});