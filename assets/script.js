const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

let posImageCarrousel = 0; // variable globale la premiere position du caroussel par défaut
// met à jour l image, le tagline et l ordre des bullet 
function updateCarrousel(){ 
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[posImageCarrousel].image;
	document.querySelector('#banner p').innerHTML= slides[posImageCarrousel].tagLine;
	document.querySelector(".dots").innerHTML=displayBullet();
}

arrowRight.addEventListener('click', ()=>{
	if (posImageCarrousel < slides.length -1)
		posImageCarrousel++;
	else
		posImageCarrousel=0;
	updateCarrousel()
	console.log('you clicked RIGHT !!!!');
})


arrowLeft.addEventListener('click', ()=>{
	if (posImageCarrousel == 0)
		posImageCarrousel = slides.length -1;
	else
		posImageCarrousel--;	
	updateCarrousel()
	console.log('you clicked LEFT !!!!');
})


function displayBullet(){
	let result = ""
	for (i=0;i<slides.length;i++){
		if (i==posImageCarrousel)
			result+="<div class='dot dot_selected'></div>";
		else 
			result+="<div class='dot'></div>";
	}
	return result;
	//"<div class='dot'></div><div class='dot dot_selected'></div><div class='dot'></div><div class='dot'></div>";
}


//On s"assure que DOM est chargé 
document.addEventListener('DOMContentLoaded', ()=>{
	updateCarrousel();
})