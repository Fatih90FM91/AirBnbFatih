  let head = document.getElementById("heading")
  head.addEventListener('click', function() {
    head.style.color = '#FFBC97';
  });


  let names =document.getElementsByClassName('footer-link-names');
  

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    names[i].addEventListener('click' ,function(){
         names[i].textContent="accepted";
        
    })

         names[i].style.color='#CAB8FF';
      
  }

  let items =document.getElementsByClassName('dropdown-item');

  for (let i = 0; i < items.length; i++) {
      
   items[i].addEventListener('click' ,function(){
        items[i].textContent="Perfetc choose!";
        items[i].style.backgroundColor='red';

       
   })
  }

  const mainNav =document.querySelector('nav');

  mainNav.addEventListener('mouseout' ,(e) => {
      e.preventDefault();
      document.querySelector('body').classList.add('bg-warning');
      document.querySelectorAll('h3').classList.add('bg-dark');
      
    });

//   var fruit = 'apple'
// console.log(fruit);        //apple

// function getFruit(){
//     console.log(fruit);    //fruit is accessible here
// }

// getFruit();                //apple


// function foo(){
//     var fruit ='banana';
//     console.log('inside function: ',fruit);
// }

// foo();                    //inside function: apple
// // console.log(fruit);       //error: fruit is not defined 


console.log("second example about block");


var myFunction = function () {
    var name = 'Todd';
    var myOtherFunction = function () {
      console.log('My name is ' + name);
    };
    console.log(name);
    myOtherFunction(); // call function
  };
  
  myFunction();
  // Will then log out:
  // `Todd`
  // `My name is Todd`
  

 function  firstFunction(){
     var name ="kamil";

     function secondFunction(){
         var name2="hunter";
         console.log("my name is " + name2);
     }
     secondFunction();

     function thirdFunction(){
         var name3 ="frank";

         console.log("second name " + name3);
        
        }
        thirdFunction();
        console.log(name);
 }

 firstFunction();