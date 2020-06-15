//  ( Chapter 01) 

// //  01
// alert('Hi Talha ');
// //  02
// alert('Error! Please enter a valid password');
// //   03
// alert('Welcome to JS Land... \n Happy Coding!');
// //  04
// alert('Welcome to JS Land...');
// alert('Happy Coding!');
// // 05
// console.log(alert("Hello... I can run JS through my web browser's Console"));
// // Task 06 and 07 done



//  ( Chapter 02) 

// //   01
// var username = '';

// //   02
// var myName = 'Syed Talha Kamal';

// //  03
// var message = "Hello World";
// alert(message);

// //  04
// stdName = "Jhone Doe";
// stdAge = "15 years old";
// stdQul = "Certified Mobile Application Developer";
// alert(stdName);
// alert(stdAge);
// alert(stdQul);

// //  05
// recipe = "PIZZA";
// alert(recipe + "\n" + recipe.slice(0, 4) + "\n" + recipe.slice(0, 3) + "\n" + recipe.slice(0, 2) + "\n" + recipe.charAt(0));

// //  06
// email = 'syedtalhakamal@gmail.com';
// alert('My email address is ' + email);

// //  07
// book = 'A smarter way to learn JavaScript';
// alert('I am trying to learn from the book ' + book);

// //  08
// document.write("<h2>Yah! I can write HTML content through JS</h2>");

// //  09
// var patern = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(patern);



//  ( Chapter 03) 

// 01)
// var age = (23)
// alert("I am " + age + " years old")

// // 02)
// var track = (14)
// alert("You have visited this site " + track + " times.")

// // 03)
// var birthYear = (1996)
// document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

// // 04)
// var name = ("John Doe").bold()
// var product = ("T-Shirts(s)").bold()
// var quantity = ("5").bold()
// document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")



//  ( Chapter 04) 
// 01)
// var a, b, c;

// // 02)
// var a, b, c, d, e;      
// // var 1a,? b, !c, "d,-e;  

// // 03)
// var heading = ("Rules for naming JS variables" + "<br>").bold()
// document.write(heading)
// document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
// document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
// document.write("<br>" + "Variable names are case sensitive")
// document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")


//  ( Chapter 05) 
// // 01)
// var num1 = 3
// var num2 = 5
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// // 02)
// var num1 = 3
// var num2 = 5
// document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
// document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
// document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
// document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

// // 03)
// var number
// document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
// number = 5
// document.write("<br>" + "Initial value: " + number)
// document.write("<br>" + "Value after increment is: " + ++number)
// var number1 = number + 7
// document.write("<br>" + "Value after addition is: " + number1)
// document.write("<br>" + "Value after decrement is: " + --number1)
// document.write("<br>" + "The remainder is: " + number1 % 3)

// // 04)
// var cost = 600
// var ticket = 5
// document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

// // 05)
// var i
// document.write("<br>" + "<br>" + "Table of 4" + "<br>")
// for (i = 1; i <= 10; i++) {
//     document.write("4x" + i + "=" + 4 * i + "<br>")
// }

// // 06)
// var celsius = 25
// document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
// var fahrenheit = 70
// document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

// // 07)
// document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
// var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
// document.write("<br>" + "Price of item 1 is " + pi1)
// document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
// document.write("<br>" + "Price of item 2 is " + pi2)
// document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
// document.write("<br>" + "Shiping charges " + sc)
// document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

// // 08)
// document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
// var marksobtained = 804
// var totalmarks = 980
// document.write("<br>" + "Total marks " + totalmarks)
// document.write("<br>" + "Marks obtained " + marksobtained)
// document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

// // 09)
// document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
// var dollar = 10, saudiriyal = 25
// document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))

// // 10)
// var integer = 9
// document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

// // 11)
// document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
// var currentyear = 2020, birthyear = 1996
// document.write("<br>" + "Current year: " + currentyear)
// document.write("<br>" + "Birth year: " + birthyear)
// document.write("<br>" + "Your age is: " + (currentyear - birthYear))

// // 12)
// document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
// var radius = 20
// document.write("<br>" + "Radius of cicle is:" + radius)
// document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
// document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

// // 13)
// document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
// var snack = ("chocolate chip")
// var age = 19, maxage = 80, perday = 3
// document.write("<br>" + "Favourite Snack: " + snack)
// document.write("<br>" + "Current age: " + age)
// document.write("<br>" + "Estimated Maximum Age: " + maxage)
// document.write("<br>" + "Amount of snack per day: " + perday)
// document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)


//  ( Chapter 06-09)

// // 01

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> ----------------"+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
//         ) 


// // 02
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;

// document.write(" a is ="+a)
// document.write("<br/> b is = "+b)
// document.write("<br/> result is ="+result +"</br> </br>")

// // 03

// var userName = prompt("Enter your Name")
// alert("Hello" +userName+" have a good day")

// // 05

// var table = prompt("Enter a number for Table","5")
// var a = Number(table);
// var num = 1
// document.write(
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"

// )

// // 06
// var sub1 = prompt("Enter First Subject Name")
// var sub2 = prompt("Enter Second SUbject Name")
// var sub3 = prompt("Enter Third SUbject Name")
// var sub1Marks = prompt("Enter First Subject Marks")
// var a = Number(sub1Marks)
// var sub2Marks = prompt("Enter Second Subject Marks")
// var b = Number(sub2Marks)
// var sub3Marks = prompt("Enter Third Subject Marks")
// var c= Number(sub3Marks)
// var totalMarks = 100

// document.write(
//               "<table>"+
//               "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//               "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//               "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
//              "</table>" 



//  (Chapter 09-11)
// 01

// var city = prompt("Enter Your City Name")

// if (city === "Karachi"| city === "Karachi"){
//     alert("Welcome to city of lights")
// }

// // 02

// var gender = prompt("Enter Your Gender")
// if  (gender === "Male"| gender ==="male"){
//     alert("Good Morning Sir")
// }

// if  (gender === "Female"| gender ==="female"){
//     alert("Good Morning Ma'am")
// }

// // 03
//  var light = prompt("Enter Traffic SIgnal Light Color")
//  if (light=== "Red"| light ==="red"){
//      alert("Must Stop")
//  }

//  if (light=== "Yellow"| light ==="yellow"){
//     alert("Ready to move")
// }

// if (light=== "Green"| light ==="green"){
//     alert("Move now")
// }

// // 04
// var fuel = prompt("Enter Your Remaining Fuel Levl")
// if (fuel === "0.25"){
//     alert("Please refill the fuel in your car")
// }

// // 05
// // a. var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // b. var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// // c. var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// // d. var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// // e. if (true){
// // alert("True");
// // }
// // if (false){
// // alert("False");
// // }
// // f. if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }

// // 06

// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks")
// var sub2 = prompt("Enter Your Second Subject Marks")
// var sub3 = prompt("Enter Your Third Subject Marks")
// var sub1Marks = Number(sub1)
// var sub2Marks = Number(sub2)
// var sub3Marks = Number(sub3)
// var markObtained = sub1Marks+sub2Marks+sub3Marks
// var percentage = markObtained/totalMarks*100

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }

// if (percentage >= 60){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// if (percentage <= 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )

// // 07

// var number = 10
// var userInput = +prompt("Enter the number")
// if (number==userInput){
//     alert("BINGO! Correct Answer")
// }

// else if (userInput+1==number){
//     alert("Close enough to the correct answer")
// }

// else{
//     alert("You lost!")
// }



// // 08
// var num = prompt("Enter a Number to check is divisible by 3")

// if (num % 3 === 0){
//     alert("Your Given Number is Divisible by 3")

// }else {
//     alert("Your Given Number is not Divisble by 3")
// }

// // 09

// var num = prompt("Enter a number: ")
// if(num % 2 === 0){
//     alert(num +" is a even number")
// }else{
//     alert(num +" is a odd number")
// }

// // 10

// var temp = prompt("Enter the temperature")
// var t = Number(temp)

// if (t > 40){
//     alert("It is too hot outside")
// }

// if (t > 30){
//     alert("The weather today is Normal")
// }

// if (t > 20){
//     alert("Today's weather is cool")
// }

// if (t > 10){
//     alert("OMG! Today's weather is a cool")
// }

// // 11
// var a = prompt("Enter First number")
// var b = prompt("Enter Second number")
// var operator = prompt("Enter an operator operation(+,-,*,/,%)")
// var num1 = Number(a)
// var num2 = Number(b)

// if (operator === "+"){
//     alert ("Your Ans is "+(num1+num2))
// }

// if (operator === "-"){
//     alert ("Your Ans is "+(num1-num2))
// }

// if (operator === "*"){
//     alert ("Your Ans is "+(num1*num2))
// }

// if (operator === "/"){
//     alert ("Your Ans is "+(num1/num2))
// }

// if (operator === "%"){
//     alert ("Your Ans is "+(num1%num2))
// }


//  (Chapter12-13)
// 01)
// var ch = prompt('Enter any character or number:');
// var a = ch.charCodeAt(0);
// if ((a >= 48) && (a <= 57)) {
//     alert('Input is a number.')
// }
// else if ((a >= 65) && (a <= 90)) {
//     alert('Input is an uppercase letter.')
// }
// else if ((a >= 97) && (a <= 122)) {
//     alert('Input is lowercase letter.')
// }
// else {
//     alert('Invalid input');
// }

// // 02)
// var int1 = +prompt("Enter first integer to be compared")
// var int2 = +prompt("Enter second integer to be compared")
// if (int1 > int2) {
//     document.write(int1 + " is larger than " + int2 + "<br>")
// }
// else if (int1 < int2) {
//     document.write(int2 + " is larger than " + int1 + "<br>")
// }
// else if (int1 == int2) {
//     document.write(int1 + " is equal to " + int2 + "<br>")
// }

// // 03)
// var integer1 = +prompt("Enter an integer")
// if (integer1 > 0) {
//     document.write(int1 + " is larger than zero" + "<br>")
// }
// else if (integer1 < 0) {
//     document.write(int2 + " is smaller than zero" + "<br>")
// }
// else if (integer1 == 0) {
//     document.write(int1 + " is equal to zero" + "<br>")
// }

// // 04)
// var char = prompt("Enter any character")
// if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
//     document.write("It is a vowel" + "<br>")
// }
// else {
//     document.write("It is not a vowel" + "<br>")
// }

// // 05)
// var corpass = pakistan
// var guesspass = prompt("Enter your password" + "<br>")
// if (corpass === guesspass) {
//     document.write("Correct! The password you entered matches the original password" + "<br>")
// }
// else if (corpass !== guesspass) {
//     document.write("Incorrect password" + "<br>")
// }
// else {
//     document.write("Please enter your password" + "<br>")
// }

// // 06)
// var greeting, hour = 13
// if (hour < 18) {
//     greeting = "Good day"
// }
// else {
//     greeting = "Good evening"
// }

// // 07)
// var time = prompt("Enter time in 2 hour format: ")
// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning!" + "<br>")
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!" + "<br>")
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!" + "<br>")
// }
// else if (time >= 2100 && time < 2359) {
//     document.write("Good Night!" + "<br>")
// }



//  (Chapter14-16)
// 01
// 

//  (Chapter17-20)
// 01
// var multi_dim = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// //   02
// var multi_dim2 = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];

// //   03
// var i;
// for (i = 1; i < 11; i++) {
//   document.write(i + '<br>');
// }

// //  04
// var table_num = parseInt(prompt('Enter a number to show its multiplication table: '));
// var table_lenght = parseInt(prompt('Enter lenght of multiplication table: '));
// var i;
// document.write(`<h2>Table of ${table_num} </h2>`);
// document.write(`<h2>Lenght of table is ${table_lenght} </h2>`);
// for (i = 1; i < table_lenght + 1; i++) {
//   document.write(`${table_num} x ${i} = ${table_num * i} <br>`);
// }

// //  05
// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + '<br>');
// }
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${fruits.indexOf(fruits[i])} is ${fruits[i]} <br>`);
// }

// //  06
// arr_counts = [];
// for (let i = 1; i < 16; i++) {
//   arr_counts.push(i);
// }
// document.write(`Counting: ${arr_counts} <br>`);

// arr_reverse = [];
// for (let i = 1; i < 11; i++) {
//   arr_reverse.push(i);
// }
// document.write(`Reverse Counting: ${arr_reverse} <br>`);

// arr_even = [];
// for (let i = 0; i < 21; i += 2) {
//   arr_even.push(i);
// }
// document.write(`Even: ${arr_even} <br>`);

// arr_odd = [];
// for (let i = 1; i < 21; i += 2) {
//   arr_odd.push(i);
// }
// document.write(`Odd: ${arr_odd} <br>`);

// arr_series = [];
// for (let i = 2; i < 21; i += 2) {
//   arr_series.push(i + 'K');
// }
// document.write(`Series: ${arr_series} <br>`);

// //  07
// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// user_search = prompt('Welcome to ABC Bakery. What do you want to order?');
// for (let i = 0; i < A.length; i++) {
//   if (user_search == A[i]) {
//     alert(`${A[i]} is available at index ${A.indexOf(A[i])} in our bakery`);
//     break;
//   }
// }

// //  08
// var A = [24, 53, 78, 91, 12];
// var largest = Math.max(...A);
// document.write('Array Items: ', A);
// document.write('<br>Largest Number in Array: ', largest);

// //  09
// var A = [24, 53, 78, 91, 12];
// var smallest = Math.min(...A);
// document.write('<br>Array Items: ', A);
// document.write('<br>Smallest Number in Array: ', smallest);

// //  10
// for (var i = 1; i < 21; i++) {
//   document.write('<br>' + i * 5);
// }
