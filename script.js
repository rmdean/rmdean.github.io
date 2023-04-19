function moreText(){
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("seeMore");
	if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function evenMoreText() {
  var moreDots = document.getElementById("moreDots");
  var moreText = document.getElementById("moreText");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function submit(){
	let sectionResult = document.getElementById("result");
	let qq1 = document.getElementById("txt-q1").value;
	let qq2 = document.getElementById("txt-q2").value;
	let qq3 = document.getElementById("txt-q3").value;
	let qq4 = document.getElementById("txt-q4").value;
	let grade = 0;
	
	if(qq1 == "Hollywood, FL"){
		grade += 1;
		document.getElementById("q1").innerHTML = "Question 1 - Correct";
	}
	
	else{
		grade += 0;
		document.getElementById("q1").innerHTML = "Question 1 - Incorrect";
	}
	
	if(qq2 == "Lifeguard in Long Beach Island, NJ"){
		grade += 1;
		document.getElementById("q2").innerHTML = "Question 2 - Correct";
	}
	
	else{
		grade += 0;
		document.getElementById("q2").innerHTML = "Question 2 - Incorrect";
	}
	
	if(qq3 == "Become a pharmaceutical sales representative"){
		grade += 1;
		document.getElementById("q3").innerHTML = "Question 3 - Correct";
	}
	
	else{
		grade += 0;
		document.getElementById("q3").innerHTML = "Question 3 - Incorrect";
	}
	
	if(qq4 == "Charleston, SC"){
		grade += 1;
		document.getElementById("q4").innerHTML = "Question 4 - Correct";
	}
	
	else{
		grade += 0;
		document.getElementById("q4").innerHTML = "Question 4 - Incorrect";
	}

	//show result
	sectionResult.classList.remove("hidden");
	document.getElementById("score").innerHTML = "You scored a " + grade + "/4"
}

setInterval(changeSlide, 5000);
let img1=document.getElementById("beach");
let img2=document.getElementById("charleston");
let img3=document.getElementById("hollywood");
let img4=document.getElementById("lbi");

function changeSlide(){
	if (!img1.classList.contains("hidden")){
		img1.classList.add("hidden");
		img2.classList.remove("hidden");
	}
	
	else if (!img2.classList.contains("hidden")){
		img2.classList.add("hidden");
		img3.classList.remove("hidden");
	}
	
	else if (!img3.classList.contains("hidden")){
		img3.classList.add("hidden");
		img4.classList.remove("hidden");
	}
	
	else if (!img4.classList.contains("hidden")){
		img4.classList.add("hidden");
		img1.classList.remove("hidden");
	}
}
