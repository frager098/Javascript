//Control Statements
//Activity 1 If Else Statements
//Task 1: Write a program to check if a number is positive , negative or zero and log the result to the console
// let number = + prompt ("Enter Number");
// if ( number > 0 )
// {
//     console.log("Number is Positive");
// }
// else if ( number < 0 )
// {
//     console.log("Number is Negative");
// }
// else{
//     console.log("Number is 0");
// }
//Task 2: Write a program to check if a person is eligible to vote(age >= 18)  and log the result to the console
// let age = + prompt ( "Enter Age of a person");
// if ( age >= 18 ){
//     console.log("He is eligible to vote");
// }
// else{
//     console.log("He is not eligible to vote");
// }
//Activity 2 Nested If Else Statement
//Task 3 : Write a program to check the largest of three numbers and log the result to the console
// let number1 = + prompt ("Enter 1st Number");
// let number2 = + prompt ("Enter 2nd Number");
// let number3 = + prompt ("Enter 3rd Number");
// if ( number1 > number2 )
// {
//     if(number1 > number3 )
//     {
//         console.log(number1," is the largest among the three numbers");
//     }
//     else{
//         console.log(number3," is the largest among the three numbers");
//     }
// }
// else if (number2 > number1)
// {
//     if(number2 > number3)
//     {
//         console.log(number2," is the largest among the three numbers");
//     }
//     else{
//         console.log(number3," is the largest among the three numbers");
//     }
// }
// else if (number3 > number1){
//     if ( number3 > number2)
//     {
//         console.log(number3," is the largest among the three numbers");
//     }
//     else
//     {
//         console.log(number2," is the largest among the three numbers");
//     }
// }
// else{
//     console.log("exit");
// }
//Activity 3 Switch Case
//Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
// let n = + prompt ( "Enter day of the week based on number(1-7)");
// switch(n){
//     case 1 :
//         console.log("Monday");    
//         break ;
//     case 2:
//         console.log("Tuesday");    
//         break ;
//     case 3:
//         console.log("Wednesday");    
//         break ;
//     case 4 :
//         console.log("Thursday");    
//         break ;
//     case 5 :
//         console.log("Friday");    
//         break ;
//     case 6:
//         console.log("Saturday");  
//         break ;
//     case 7 :
//         console.log("Sunday");    
// }
//Task 5 : Write a program using switch statements to assign a grade "A","B","C","D" ,"F" based on grades and log the result to the console
// let score = + prompt ("Enter Score");
// switch(true){
//     case score >= 80 :
//         var grade = "A"; //Hoisting concept
//         // console.log(grade);
//         break ;
//     case score < 80 && score >= 70 :
//         grade = "B";
//         // console.log(grade);
//         break ;
//     case score < 70 && score >= 60 :
//         grade = "C";
//         // console.log(grade); 
//         break ;
//     case score < 60 && score >= 50 :
//         grade = "D";
//         // console.log(grade);
//         break ;
//     case score < 50 :
//         grade = "F";
//         break ;
//     }
//     console.log(grade); 
//Activity 4 (Conditional)Ternary Operator 
//Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
// let numberToCheck = + prompt ("Enter Number");
// let result = (numberToCheck % 2 == 0 ) ? "Number is Even":"Number is ODD";
// console.log(result);
//Activity 5 Combining Conditions
//Task 7 : Write a program to check if a year is leap using multiple conditions ( divisible by 4 , but not 100 unless also divisible by 400) and log the result to the console
// let leapYearCheck = + prompt("Enter days of the year");
// let result = ( (leapYearCheck % 4 == 0 && leapYearCheck % 100 != 0 )|| (leapYearCheck % 400 == 0) ) ? "Leap Year":"Not a Leap Year" ;
// console.log ( result );