//Objects
/*
var Obj1={
    name:'Raju',
    age:25
}
var pincode =121003;
var Obj2 =Obj1;
Obj2.name="Anuj";
function channge(a,b){
    a = 0;
    b.name ="Raj";
}
channge(pincode,Obj1);
console.log(pincode);
console.log(Obj1);

*/

//Fuction basic concepts
/*
var years =[1990,1991,1997,2000,1967];
function arrayCalc(arr ,fn){

    var arrRes=[];
    for(var i=0;i<arr.length;i++){
          arrRes.push(fn(arr[i])); 
    }
    return arrRes; 
}
function calculateAge(el){
    return 2022-el;
} 
function isfullAge(arg){
return arg<30;
}


var ages =arrayCalc(years,calculateAge);
console.log(ages);
var fullAge=arrayCalc(ages,isfullAge);
console.log(fullAge)
*/

//Function Returning function 
/*
function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
          console.log(name+' can you please explain what UX desing is?')   
        }
    }
    else if(job ==='teacher'){
        return function(name){
            console.log('What subject do you teach '+name+' ?')
        }

    }
    else {
        return function(name){
            console.log('Hello '+name+' What do you do?')
        }
    }
}
 interviewQuestion('teacher')('test');
 */

//Lecture:IIFE Immediately invoked funtion expressionn
//This concept is used for data privacy
/*
function game() {
    var score = Math.ceil(Math.random() * 10);

    console.log(score);
    console.log(score >= 5);

}
game();
*/
/*
(function () {
    var score = Math.random() * 10;
   // console.log(score >= 5);
}
)();
 //console.log(score);
 (function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5-goodLuck);
 })(2)

*/
//Lecture:Closures

/*
function retirement(retirementAge) {
    var a = ' Years left until retirement '

    return function(yearsOfBirth) {
        var age = 2016 - yearsOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementIndia = retirement(60);
retirementIndia(1960)

function interviewQuestion(job) {

    return function(name) {
        if (job === 'designer') {
            console.log(name + ' can you please explain what UX desing is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + ' ?')
        } else {
            console.log('Hello ' + name + ' What do you do?')
        }
    }

}
interviewQuestion('teacher')('mark');
*/

//Lecture:Bind , call and apply

var john = {
    name: 'John',
    age: 26,

}