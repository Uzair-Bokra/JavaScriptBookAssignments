//                                                    chapter 6-9
// 1. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser:  
var number = 10;
document.writeln("Result:<br>");
document.writeln("The value of number is: " + number + "<br><br>");

document.writeln("The value of ++number is: " + (++number) + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of number++ is: " + (number++) + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of --number is: " + (--number) + "<br>");
document.writeln("Now the value of number is: " + number + "<br><br>");

document.writeln("The value of number-- is: " + (number--) + "<br>");
document.writeln("Now the value of number is: " + number + "<br>");
// 2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.writeln("a = " + a + "<br>");
document.writeln("b = " + b + "<br>");
document.writeln("result = " + result + "<br>");
// 3. Write a program that takes input a name from user & 
// greet the user. 
var name = prompt("Enter your name:");
alert("Hello " + name + "! Welcome to JavaScript.");
// 4.  
// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default. 
var num = +prompt("Enter a number for multiplication table:", 5);
document.writeln("<h3>Multiplication Table of " + num + "</h3>");
for (var i = 1; i <= 10; i++) {
  document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
}
// 6. Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table) 
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");
var totalMarks = 100;

var marks1 = +prompt("Enter marks obtained in " + sub1 + ":");
var marks2 = +prompt("Enter marks obtained in " + sub2 + ":");
var marks3 = +prompt("Enter marks obtained in " + sub3 + ":");

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.writeln("<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.writeln("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.writeln("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.writeln("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
document.writeln("</table><br>");
document.writeln("Total Obtained Marks: " + totalObtained + "<br>");
document.writeln("Percentage: " + percentage.toFixed(2) + "%");











