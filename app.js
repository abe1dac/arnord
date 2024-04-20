const bar= document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classlist.add('active');
    })
}
function greetings() {
    let name = prompt ("what is your name?");
    alert ("Hi "+ name +" it is our pleasure serving you here , feel free while shoping with us and welcome back again");
 }
greetings ();
