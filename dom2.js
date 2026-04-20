// // var num=  Math.floor(Math.random()*10000);
// // console.log("Your otp is :"+num);

// var btn= document.querySelector("button");
// var box= document.querySelector('#box');
// //var flag=0;
// function changebox(){
// //   if(flag==0){
// //       box.style.backgroundColor='blue'
// //       flag=1;
// //   }

// //   else{
// //     box.style.backgroundColor='pink';
// //     flag=0;
// //   }

//   var c1= Math.floor(Math.random()*256)
//   var c2= Math.floor(Math.random()*256)
//   var c3= Math.floor(Math.random()*256)
  
//   box.style.backgroundColor= `rgb(${c1},${c2},${c3})`
// }

// btn.addEventListener('click',changebox)

// let arr=['CSK','RCB','RR','SRH','DC','KKR','LSG','PKBS','GT','MI']

// let num= Math.floor(Math.random()*arr.length);
// console.log("The winner of ipl 2026 is "+arr[num]);


// let arr=['CSK','RCB','RR','SRH','DC','KKR','LSG','PKBS','GT','MI'];

// let btn= document.querySelector('button');
// let h1= document.querySelector('h1')

// function winner(){
//     let num= Math.floor(Math.random()*arr.length);

//     let winner= arr[num];
    
//     h1.innerHTML= winner;
// }

// btn.addEventListener('click',winner)


var  arr =[
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },

    {
        team:'rcb',
        primary:'red',
        secondary:'black'
    },

    {
            team:'MI',
        primary:'blue',
        secondary:'gold'
    }
]

var btn= document.querySelector('button');
var h1= document.querySelector("h1");

function winner(){
    var num= Math.floor(Math.random()*arr.length);
    var winner= arr[num];

    h1.innerHTML=winner.team
    h1.style.backgroundColor= winner.primary
    h1.style.color= winner.secondary
    
    
}

btn.addEventListener('click',winner);
