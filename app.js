
//elementi id ye göre seçme
/* let value;

value = document.createElement("a");
 */

//      QUERY SELECTOR-CSS SELECTOR
/* 
value=document.querySelector("#clear-todos"); */
/* value=todolist=document.querySelector(".list-group");
value=todolist.childElementCount;
value=todolist.previousElementSibling;
 */
/* yeni link oluşturma
 */

/* const cardbody = document.getElementsByClassName("card-body")[1];
value.id = "clear-todos";
value.className = "btn btn-primary";
value.href = "https://www.google.com.tr";
value.target = "_blank";

value.appendChild(document.createTextNode("SA"));
cardbody.appendChild(value);
console.log(value); */

/* 

const filterInput=document.getElementById("filter");
filterInput.onfocus=function()
{
    console.log("naber");
} */
/* const filterInput=document.getElementById("filter");
filterInput.addEventListener("focus",function(e){
console.log(e.type);
}); */
/* 
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);
function submitForm(e) {
    console.log("Submit Eventi");

} */
/* 
document.addEventListener("keydown",run);
function run(e)
{
    if(e.key=='a')
    {
        console.log("hazar baba");
    }
 
} */
/* const header = document.querySelector(".card-header");
const input = document.querySelector("#todo");
input.addEventListener("keyup", changeText);
function changeText(e) {
    header.textContent = e.target.value;
   
} */
/* const cardbody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");

title.addEventListener("mouseover",run);
function run(e)
{
    console.log(e.type);
} */

/* 
const filter=document.getElementById("filter"); */
/* 
document.addEventListener("DOMContentLoaded",load);
function load(e)
{
    console.log("SAYFA YÜKLENDİ");
}
    FOCUS  */
/* filter.addEventListener("focus",run);
function run(e){
    console.log(e.type);
} */


document.querySelector(".container").addEventListener("click", run);
function run(e) {
    console.log(e.type);
}