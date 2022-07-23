let h = 1,
m = 59
s = 59

const hh = document.querySelector('#h');
    const hm = document.querySelector('#m');
    const hs = document.querySelector('#s');
var x = setInterval(function() {
    // console.log(5)
    hs.innerText = s
    s--
    if(s==0){
        m--
    }
    hm.innerText = m
    if(m==0){
        h--
    }
    hh.innerText = h
    if(h==0 && m == 0 && s==0){
        hs.innerText = '00'
        hm.innerText = '00'
        hh.innerText = '00'
        clearInterval(x)
    }
    if(s==0){
        s = 59
    }
    if(m==0){
        m = 60
    }
}, 1000);

