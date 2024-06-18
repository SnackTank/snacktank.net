let selectElement = document.querySelector('select');

selectElement.addEventListener('change', function() {
  if(selectElement.value === "javaPong") {
	window.open('javapong.html', '_self');
  }
  if(selectElement.value === "ll") {
  window.open('../funstuff.html', '_self');
  }
  if(selectElement.value === "numB3rz") {
  window.open('numb3rz.html', '_self');
  }
});