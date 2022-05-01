var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); //get time
        //display in p element
     document.getElementById('currentDay').innerText = currentTime;
  
  //get the assigned div hour and compare it to actual time
  $(".textarea").each(function () {
    var now = moment().format("HH");
  //gets the number from the button 

    var apptTime = $(this).attr("id").split("-")[1];
    
    
// compare numbers and remove class and add new class
      if(now == apptTime){
      $(this).removeClass("text");
      $(this).addClass("present");
      }
      if(now > apptTime) {
      $(this).removeClass("present");
      $(this).addClass("past");
      }
      if(now < apptTime) {
        $(this).removeClass("past");
        $(this).addClass("future");
      }
  });
 
  var comment= [];
 
  
// saves time and appt with button click
$(document).ready(function () {
  $(".saveBtn").on("click", function(event) {
    event.preventDefault()
    //get button number for key
    var hourBtn = $(this).attr("id").split("-")[1];
    var comment = $(this).prev('textarea').val();
    localStorage.setItem(hourBtn, JSON.stringify(comment));
  })
});
 
  //retrieve items from local storage and set them in proper textarea
 
  var local8 = localStorage.getItem("08")
  document.getElementById("textarea-08").innerHTML = local8;

  var local9 = localStorage.getItem("09");
  document.getElementById("textarea-09").innerHTML = local9;

  var local10 = localStorage.getItem("10");
  document.getElementById("textarea-10").innerHTML = local10;

  var local11 = localStorage.getItem("11");
  document.getElementById("textarea-11").innerHTML = local11;

  var local12 = localStorage.getItem("12");
  document.getElementById("textarea-12").innerHTML = local12;

  var local13 = localStorage.getItem('13');
  document.getElementById("textarea-13").innerHTML = local13;

  var local14 = localStorage.getItem('14');
  document.getElementById("textarea-14").innerHTML = local14;

  var local15 = localStorage.getItem('15');
  document.getElementById("textarea-15").innerHTML = local15;

  var local16 = localStorage.getItem('16');
  document.getElementById("textarea-16").innerHTML = local16;

  var local17 = localStorage.getItem('17');
  document.getElementById("textarea-17").innerHTML = local17;


