var emp= new Object();
emp.id=102;
emp.name="sai";
emp.salary=50000;
document.write(emp.id+" " + emp.name +" " + emp.salary)

// var date=new Date();
// var day=date.getDate();
// var month= date.getMonth();
// var year= date.getFullYear();
// document.write("<br> Date is:" +day+ "/" +month+ "/" + year);


var today=new Date();
var h= today.getHours();
var m= today.getMinutes();
var s= today.getSeconds();
var ms= today.getMilliseconds();
document.write("<br> Today Time is : " + h + " : " + m + " : " + s + " : " + ms);
alert(today);


function getcube(){
var number=document.getElementById("number").value;
alert(number*number*number);
}

function totalelements(){
    var allgenders=document.getElementsByName("gender");
    alert("Total Genders : " +allgenders.length);
}


function countpara(){
    var totalpara=document.getElementsByTagName("p");
    alert("Total P tags are : " + totalpara.length);
}