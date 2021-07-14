var settingsMenu = document.querySelector('.settings-menu');
var darBtn = document.getElementById("dark-btn");

const settingMenuToggle=()=>{
    settingsMenu.classList.toggle("settings-menu-height");

}
darBtn.onclick=()=>{
    darBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
         localStorage.setItem("theme","dark");
    }else{
         localStorage.setItem("theme","light");
    }


}
if(localStorage.getItem("theme")=="light"){
    darBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}else if(localStorage.getItem("theme")=="dark"){
 darBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");   
}else{
    localStorage.setItem("theme","light");
}
