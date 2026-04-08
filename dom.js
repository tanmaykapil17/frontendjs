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

var box =document.getElementById('box');

console.log(box);

box.addEventListener('click',function(){
    box.style.color='red';
})
