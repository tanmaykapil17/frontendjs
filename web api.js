// settimeout = delay
// console.log("hello 1");

// setTimeout(function(){
//     console.log("Tanamy kapil ");

// },3000)

// console.log("hello 3");

// var btn = document.querySelector('button');
// var h5=  document.querySelector("h5");

// btn.addEventListener('click',function(){
//     h5.innerHTML='request sending....';
//     h5.style.color='yellow'
//     btn.innerHTML='Adding....'

//     setTimeout(function(){
//         h5.innerHTML='friends';
//         h5.style.color='green';
//         btn.innerHTML='remove friends'
//     },3000)

// })

var btn = document.querySelector("button");
var percent = document.querySelector("#percent");
var growth = document.querySelector("#growth");

var grow = 0;

btn.addEventListener('click',function(){

    var int= setInterval(function(){
        grow++;
        percent.innerHTML= grow+'%';
        growth.style.width= grow+'%'

    },50)

    setTimeout(() => {
    clearInterval(int);
    btn.innerHTML='Downloaded'
}, 5000);

})

