window.onload = function () {

	if (typeof (Storage) != "undefined") {
		if (localStorage.color !== undefined) {
			updateColor(localStorage.color);
		} 
		if (localStorage.Fontcolor !== undefined) {
			updateFontColor(localStorage.fontColor);
		} 

	} else {
		document.write("Sem suporte para Web Storage");
	}

	let btnYellow = document.getElementById("btnYellow");
	btnYellow.addEventListener("click", function () {
		updateColor("yellow");
	})

	let btnRed = document.getElementById("btnRed");
	btnRed.addEventListener("click", function () {
		updateColor("red");
	})

	let btnFontBlack = document.getElementById("btnFontBlack");
	btnFontBlack.addEventListener("click", function () {
		updateFontColor("black");
	})	

	let btnFontBlue = document.getElementById("btnFontBlue");
	btnFontBlue.addEventListener("click", function () {
		updateFontColor("blue");
	})	

	function updateColor(color) {
		let text = document.getElementById("text");
		text.style.backgroundColor = color;
		localStorage.color = color;
	}

	function updateFontColor(color) {
		let text = document.getElementById("text");
		text.style.color = color;
		localStorage.fontColor = color;
	}


	


}