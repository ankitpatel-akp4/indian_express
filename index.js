

let timeInterval = 2000
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


// slider**************************************************
let data = [{img:'https://images.indianexpress.com/2022/07/masks-1200.jpg?resize=450%2C250&w=300',
p:'How Bihar’s artists rode out the Covid crisis with tech & tradition',
},
{img:'https://images.indianexpress.com/2022/06/IMG-20220618-WA0128.jpg?resize=450%2C250&w=300',
    p:"Backed by self-help groups, women in Bharuch learn to stand on their feet",
    },
    {img:"https://images.indianexpress.com/2022/06/dhamrad-1200.jpg?resize=450%2C250&w=300",
        p:"In this Gujarat district, 'smart' anganwadis are boosting child healthcare post Covid",
        },
        {img:"https://images.indianexpress.com/2022/07/rahel-final-sos-1200-1.jpeg?resize=450%2C250&w=300",
            p:"In post-pandemic world, homegrown saree brands weave stories on social media",
            },
]
const dots = document.querySelectorAll('#sliderDots>div');
dots.forEach((el, i)=>{
    el.addEventListener('click',(e)=>{
        display(el,e,i)
        clearInterval(interval);
    })
    })
let k = 0;
display(null,null,k)

   let interval =  setInterval(function() {
        display(null,null,k)
        //console.log(k)
        k++
        
        if(k>3){
            k = 0;
        }
      }, timeInterval);

function display(el,e,i){
    //console.log(i,dots);
        dots[i].style.backgroundColor = 'red'
        document.querySelector('#slidCon>img').setAttribute('src',data[i].img);
        document.querySelector('#slidCon>p').innerText = data[i].p;
        dots.forEach((ell,j) => {
            if(i != j){
                ell.style.backgroundColor ='#aca8aa'
            }
        });
    }
const play = document.querySelector('#play');
play.addEventListener('click',()=>{
    const toPlay = document.querySelector('#toPlay').innerText;
    console.log(toPlay);
    let utterance = new SpeechSynthesisUtterance(toPlay);
    speechSynthesis.speak(utterance);
})


const textArea = document.querySelector('textarea');
textArea.addEventListener('input',(e)=>{
    const count = document.querySelector('#count');
    count.innerText = 3000 - e.target.value.length
})
const post = document.querySelector('#post');
let pre;
post.addEventListener('click',()=>{
const show = document.querySelector('#showComment');
 const p = document.createElement('p');
 p.innerText = document.querySelector('textarea').value;
 show.insertBefore(p,pre)
 pre = p

})


const doop = document.querySelector('#loop');
const video = document.querySelector('video');
doop.addEventListener('click',()=>{
    video.loop = 'true'
    //console.log(video);
})




