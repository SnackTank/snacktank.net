let selectElement = document.querySelector('select');

selectElement.addEventListener('change', function() {
  if(selectElement.value === "javaPong") {
	window.open('funstuff/javapong.html', '_self');
  }
  if(selectElement.value === "ll") {
  console.log("What?!");
  window.open('funstuff.html', '_self');
  }
  if(selectElement.value === "numB3rz") {
  window.open('funstuff/numb3rz.html', '_self');
  }
});