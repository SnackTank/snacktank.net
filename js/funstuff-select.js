let selectElement = document.querySelector('select');

var softwarePage = document.getElementById("softwarePage");

selectElement.addEventListener('change', function() {
  if(selectElement.value == "javaPong") {
	softwarePage.src = 'funstuff/javapong.html';
  }
  if(selectElement.value == "ll") {
	softwarePage.src = 'funstuff/laserlabyrinth.html';
  }
  if(selectElement.value == "numB3rz") {
	softwarePage.src = 'funstuff/numB3rz.html';
  }
});
