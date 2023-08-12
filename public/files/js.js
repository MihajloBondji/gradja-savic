
var menuop=0;
function menu() {
  burger.classList.toggle("change");
  linksHolder.classList.toggle("changeHolder");
  logo.classList.toggle("logo2");
  menuop=!menuop;
}

function checkmenu(){
	if(menuop==1)
	menu();
}

var scrollScript = function(){
	
}

var proizvoditxt=[
	"<b>Letve</b> standardnih dimenzija <b>5x3cm i 5x2cm</b> dužine od <b>2-4m</b>.",
	"<b>Daske</b> standardnih dimenzija debljine 2,5cm i <b>Fosne</b> debljine 5cm,<br>širine od <b>12-25cm</b>, a dužine od <b>2-4m</b>. ",
	"<b>Štafne</b> standardnih dimenzija <b>5x8cm</b> dužine <b>2-4m</b>.",
	"<b>Grede</b> dimenzija: <b>10x8cm, 12x8cm, 12x10cm, 12x12cm, 14x12cm, 14x14cm, 16x12cm, 16x14cm, 16x16cm</b>, dužine od <b>1-8m</b>. Moguće je naručiti bilo koji poprečni presek greda po želji kupca.",
	"<b>Palete</b> standardnih dimenzija <b>1x1m</b> koje se sastoje od 3 podužne štafne dimenzija 6x4cm i 8 poprečnih letvica dimenzija 5x2cm.",
	"Izrada elemenata <b>svih dimenzija</b> poprečnih preseka u rasponu <i>[1cm]</i> i dužina u rasponu <i>[0,5m]</i> od <b>1-8m</b> <i>(1m, 1.5m, 2m, 2.5m, 3m...)</i>"
];


var proizvodiId=["letve","daske","stafne","grede","palete","ostalo"];

function bodyload(){
	document.getElementById('natpis1').className="natpis natpisafter";
	dodajx(0,0);
	setProizvod(0,0);
}

var xtxt=["Tradicija duga 30 godina.","Rezana gradja po vasoj meri.","Letve, stafne, daske, grede, palete...","Beli bor, crni bor, camovina..."];

function dodajx(i,j)
{
	if(i<xtxt[j].length){
	document.getElementById('natpis1').innerHTML+=xtxt[j][i++];
	setTimeout(function(){dodajx(i,j)},120);
	}
	else {
		setTimeout(function(){
			document.getElementById('natpis1').innerHTML="";
			j=(j+1)%4;
		dodajx(0,j);
		},1500);
	}
}

var slikeProiz=[
	["letve1","letve2","letve3","letve4"],
	["daske1","daske2","daske3","daske4"],
	["stafne1","stafne2","stafne3","stafne4"],
	["grede1","grede2","grede3","grede4","grede5","grede6","grede7","grede8","grede9"],
	["palete1","palete2","palete3","palete4"],
	["ostalo1","ostalo2","ostalo3","ostalo4","ostalo5","ostalo6","ostalo7","ostalo8","ostalo9"]
];

function setProizvod(i,j){
	if(document.getElementsByClassName("proizvodSelected")[0])
	document.getElementsByClassName("proizvodSelected")[0].classList.remove("proizvodSelected");
	document.getElementById("proizvodiOpis").innerHTML=proizvoditxt[i];
	document.getElementById(proizvodiId[i]).classList.add("proizvodSelected");

	document.getElementById('slideop1').src="files/"+slikeProiz[i][slikeProiz[i].length-1]+".jpg";
	document.getElementById('slideop2').src="files/"+slikeProiz[i][0]+".jpg";
	document.getElementById('slideop3').src="files/"+slikeProiz[i][1]+".jpg";

	counter=0;
	currentProizvod=i;
	if(j)
	setTimeout(function(){document.getElementById("productspictures").scrollIntoView({behavior: 'smooth'}, true);},200);
}


var counter=0;
var currentProizvod=0;

function slideshow(x){
	let num=slikeProiz[currentProizvod].length;
	if(x)
		counter=(counter+1)%num;
	else counter=(counter+num-1)%num;
	document.getElementById('slideop1').src="files/"+slikeProiz[currentProizvod][(counter+num-1)%num]+".jpg";
	document.getElementById('slideop2').src="files/"+slikeProiz[currentProizvod][counter%num]+".jpg";
	document.getElementById('slideop3').src="files/"+slikeProiz[currentProizvod][(counter+1)%num]+".jpg";
}

function closeonepic(){
	document.getElementById("onepic").className="dispnone";
}

var currentonepic=0;

function zoompic(i){
	currentonepic=i;
	document.getElementById("onepic").className="onepic";
	document.getElementById("gallery").scrollIntoView();
	document.getElementById("onepicimage").src="files/slika"+i+".jpg";
}

function onepicleft(){
	currentonepic=(currentonepic+6)%7;
	document.getElementById("onepicimage").src="files/slika"+currentonepic+".jpg";
}
function onepicright(){
	currentonepic=(currentonepic+1)%7;
	document.getElementById("onepicimage").src="files/slika"+currentonepic+".jpg";
}