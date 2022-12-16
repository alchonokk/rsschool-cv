let burgerBtn=document.getElementById('burgerBtn');
let menu=document.getElementById('menu');
let burgerClosed= 'header_burger closed';
let burgerOpened= 'header_burger opened';
let menuClosed= 'header_menu closed';
let menuOpened= 'header_menu opened';




burgerBtn.onclick=function(){
    if (burgerBtn.className==burgerClosed){
        burgerBtn.className= burgerOpened;
        menu.className=menuOpened;
        
    } else if (burgerBtn.className==burgerOpened){
        burgerBtn.className= burgerClosed;
        menu.className=menuClosed;
    }
    
}