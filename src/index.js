import "./index.scss";
import {home} from "./home";
import {menu} from "./menu";
import {starters} from "./starters";
const start=document.querySelector('#content');
start.innerHTML=starters
const  content = document.querySelector("#mainInfo");
function makeHome() {

    content.innerHTML=home
    headerTab('Home')
}
function makeMenu() {

    content.innerHTML=menu
    headerTab('Menu')
}


function headerTab(tab){
    const  headList = document.querySelectorAll("#headList>li");
    headList.forEach(list => {
        if (list.textContent===tab){
            list.style.background='cadetblue';
        }
        else {
            list.style.background='';
        }
    })
}

makeHome()
const homeBtn= document.querySelector('#home')
const menuBtn= document.querySelector('#menu')
homeBtn.addEventListener('click',makeHome)
menuBtn.addEventListener('click',makeMenu)