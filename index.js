
let logo = document.getElementById('logonav')
window.addEventListener('scroll',(e)=>{
    // console.log(window.scrollY);
    if(window.scrollY>130){
        logo.style.display = 'block'
        // console.log();
    }else{
        logo.style.display = 'none'
    }
})



let cross = document.querySelector('#cross')
cross.addEventListener('click',()=>{
    let a = document.querySelector('#menuContent')
    a.style.display = 'none'
console.log(5);
})
let menu = document.querySelector('#menu')
menu.addEventListener('click',()=>{
    let a = document.querySelector('#menuContent')
    a.style.display = 'block'
console.log(5);
})
let search = document.getElementById('search')
search.addEventListener('click',()=>{
    document.getElementById('searchContent').style.display = 'block'
    document.getElementById('hide').style.display = 'block'
    console.log(7)
})
let x = document.getElementById('x')
x.addEventListener('click',()=>{
    document.getElementById('searchContent').style.display = 'none'
    document.getElementById('hide').style.display = 'none'
    console.log(8)
})