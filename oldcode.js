//TRY, TRY, TRY AGAIN

//
//
// $("#0").click(
//   function () {
//     $("#box0").show();
//   },
//   function () {
//     $("#box0").hide();
//   }
// );
//
// $("#1").click(
//   function () {
//     $("#box1").show();
//   },
//   function () {
//     $("#box1").hide();
//   }
// );
// $("#2").click(
//   function () {
//     $("#box2").show();
//   },
//   function () {
//     $("#box2").hide();
//   }
// );
// $("#3").click(
//   function () {
//     $("#box3").show();
//   },
//   function () {
//     $("#box3").hide();
//   }
// );
// $("#4").click(
//   function () {
//     $("#box4").show();
//   },
//   function () {
//     $("#box4").hide();
//   }
// );
// $("#5").click(
//   function () {
//     $("#box5").show();
//   },
//   function () {
//     $("#box5").hide();
//   }
// );

//////WHAT IF IT HAS A CLASS FOR LETTERS AND IF IT'S A LETTER, SOMETHING HOVERS
////ACCORDING TO WHICH LETTER IT IS

// document.getElementsByClassName("hovers")[0].onmouseover = function() {
//   alert("hovering over a letter")
//   //alert(this.ID)
// };

// var letters = document.getElementsByClassName("hovers");
// var i;
// for (i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "red";
// }
//
//
// var boxArray = []; //an array for the boxes
// var letterArray = []; //an array for the letters
// for (var x = 0; x < 6; x++) //starting with 1,go to 7
// {
//   i = String(x) //i is a string version of x
//   var box = "box" + i; //now box should theoretically be
//   //a string variable called box0 box1 box2 etc
//   boxArray.push(box); //push puts stuff in the array
//   letterArray.push(i);
// }
// alert(letterArray)
//



//LETTER ARRAY IS A LIST OF THE LETTER IDS (AS STRINGS) 0-5
//loop through the array and do the function for each
//letterArray.forEach(function()){
  //array element is the one you're hovering over hopefully
  //console.log(element);
  // document.getElementById(arrayElement).onmouseover = function(){
  //   //when mouse is over, do this:
  //  alert("You're here")
  //   boxToShow = "box" + i;
  //   alert(boxToShow)
  //   document.getElementById(boxToShow).style.display = "block"; //make the box show
  //  };
//};

// var arrayLength = letterArray.length;
// for (var i = 0; i < arrayLength; i++){
//   //box = boxArray[i].slice(0,3); //gives you "box"
//   //number = boxArray[i].slice(3,4); //gives you the box number
//
//   //number = '"'+number+'"'
//   //box = '"'+box+i+'"'
//   objectHoveringOver = i.toString();
//   //TRYING TO MAKE IT DO THE function
// //for zero:
// //get element by id (0).onmouseover = function(){}
//
//   document.getElementById(objectHoveringOver).onmouseover = function(){
//     //when mouse is over, do this:
//     alert(objectHoveringOver)
//     //boxToShow = "box" + i;
//     //alert(boxToShow)
//     //document.getElementById(boxToShow).style.display = "block"; //make the box show
//
//   };
//   // document.getElementById(objectHoveringOver).onmouseout = function(){
//   //   //when mouse is not over, do this
//   //   boxToShow = "box" + i
//   //   document.getElementById(boxToShow).style.display = "none"; //hide the box
//   // };
//
//   //DO THE FUNCTION FOR IT
//   // $(number).mouseover(function(){
//   //     $(box).show();
//   // });
//   // $(number).mouseout(function(){
//   //     $(box).hide();
//   // });
//   //});
// }


//GOAL: WHEN YOU HOVER OVER A LETTER, A TEXT BOX SHOWS UP.
//USING A LIST TO MAKE THE CODE "EASIER" AND MORE EFFICIENT

//maybe have a list of them and iterate?
//function createArray()
//{
//SHOULD BE ARRAY LIKE: ["box1", "box2", "box3", "box4"...]

//}
// $(document).ready(function(){
//     $("#letterJ").mouseover(function(){
//         $("#row3").show();
//     });
//     $("#letterJ").mouseout(function(){
//         $("#row3").hide();
//     });
// });
//}

// $(document).ready(function(){
// //define the function
// var boxArray = []; //an array for the boxes
//
// for (var x = 1; x < 7; x++) //starting with 1,go to 7
// {
//   i = String(x) //i is a string version of x
//   var box = "box" + i; //now box should theoretically be
//   //a string variable called box1 box2 box3 etc
//   boxArray.push(box);
//   //i think this ^ puts stuff in the array?
//   //array.push($(box, response).html());
//   //i think this ^ puts stuff in the array?
// }
//   $.fn.showingBoxes = function(letter, box){
//     alert('You have created a function!');
//     });
//   }
//     //
//     boxArray.forEach(function(arrayObject)){
//       //do something with the object in the array (a string with the Box name)
//       alert(boxArray)
//       //for each array object
//       box = arrayObject.splice(0,3);
//       number = arrayObject.splice(-1,1);
//       //BOX NUMBER IS THE SAME AS THE LETTER NUMBER
//
//       //do the function
//       //$(showingBoxes(number, box));
//     }
//     // $("#1").mouseover(function(){ //if J is pressed
//     //     $("#box1").show(); //show row3
//     // });
//     //
//     // $("#1").mouseout(function(){
//     //     $("#box1").hide();
//     // });
// });
//
// // $function showingBoxes(letter, box){
// //   $("#1).mouseover(function(){ //if hovering over J
// //       $("#box1").show();
// //   });
// //   $("#1").mouseout(function(){ //if not hovering over J
// //       $("#box1").hide();
// //   });
// // }
// //
// // //takes in the letter attachted to a box and the box
