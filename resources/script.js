

var dark = document.getElementById("dark");


if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");

if(localData == "light") {
    dark.innerHTML = "Dark";
    document.body.classList.remove("dark-theme");
}else if(localData == "night") {
    dark.innerHTML = "Light";
    document.body.classList.add("dark-theme");
}

dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        dark.innerHTML = "Light"
        localStorage.setItem("theme", "night");
    } else {
        dark.innerHTML = "Dark"
        localStorage.setItem("theme", "light");
    }
    
}


