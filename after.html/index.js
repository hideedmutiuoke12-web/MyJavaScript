function addtion(value){
    let menu = document.getElementById("show");
    menu.value += value;
}
function clearDisplay(){
    let menu = document.getElementById("show")
    menu.value= ""
}
function Result(){
    let menu = document.getElementById("show");
        menu.value=eval(menu.value)
}
function deleteone(){
    let menu = document.getElementById("show");
    menu.value=menu.value.slice(0, -1)
}
