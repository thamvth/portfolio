$(document).ready(function(){
	$(".btn-toggle").click(function(){
		$(".menu").slideToggle()
	})
})
var btnOntop=document.getElementById("btn-ontop");
var mainHeader=document.getElementById("main-header");
var btnToggle=document.getElementById("btntoggle");
var btnClose=document.getElementById("btnclose");
var menu2=document.getElementById("menu-2");

window.onscroll=function(){
    scrollOntop();
}

function scrollOntop(){
    if(document.body.scrollTop>300||document.documentElement.scrollTop>300){
        btnOntop.style.display="block";
        // mainHeader.style.display="none"; 
        btnToggle.style.display="block";      
    }
    else{
        btnOntop.style.display="none";
        // mainHeader.style.display="flex";
        btnToggle.style.display="none";
    }
}
function btnOntopClick(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

function btnCloseClick(){
    menu2.style.display="none";
}
function btnToggleClick(){
    menu2.style.display="block";
}

// text animate


