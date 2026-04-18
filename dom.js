//DOM- document Object model

// 4 pillars of dom 

//- Selection of Element iske liye use - document.querySelector
//- changing HTML iske liye use - h.innerhtml
//- changing CSS iske liye use - h.style.property you need 
//- event listener 

//  var h = document.querySelector('h1'); // element store karo


// h.addEventListener('click',function(){
//     console.log('clicked on h1');
//    h.innerHTML='tanmay';
//    h.style.color='red';
//    h.style.fontSize='100px';
   
    
// })

// var box =document.getElementById('box');


// box.addEventListener('click',function(){
//     box.style.color='red';
// })

// var h1 = document.querySelectorAll('h1');
// h1[2].innerHTML='tanmay 1'

// var box= document.getElementById('box');
// //box.textContent='<h1>changed</h1>' yeh html tag ko bhi include karega
// box.innerHTML='<h1>changed</h1>';

// function changebox(){
//     console.log("function is running-----");
//     box.style.backgroundColor='red';
    
// }

// var button= document.querySelector('button');
// var box= document.querySelector('#box')

// // button.addEventListener('click',function(){
// //     console.log("Hello");
// //     box.style.backgroundColor ='red'
// // })
// button.addEventListener('click',changebox);




//function

var btn= document.querySelector('button');
var h5= document.querySelector('h5')

var check=0;
btn.addEventListener('click',function(){
    if(check==0){
        h5.innerHTML='friends'
    h5.style.color='blue'
    h5.style.fontSize='15px'
    btn.innerHTML='remove friend'
    console.log("friendship done ");
    
    check=1;
    }

    else{
    h5.innerHTML='stranger'
    h5.style.color='red'
    h5.style.fontSize='15px'
    btn.innerHTML='add friend'
    console.log("friendship tut gayi ")
    check=0;                
    }
})