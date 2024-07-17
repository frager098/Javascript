//Activity 1 For Loop
//Task 1 : Write program to print numbers from 1 to 10 using for loop
// for ( let i = 1 ; i < 11 ; i++ )
// {
//     console.log(i);
// }
//Task 2 : Write a Multiplication Table of 5 using for loop
// for ( let j = 1 ; j < 11 ; j++ )
// {
//     console.log(5*j);
// }
//Activity 2 While Loop
//Task 3 : Write a program to calculate sum of numbers from 1 to 10 using while loop
// let number = 1 ;
// var sum = 0   
// while(number < 11 )
//     {
//         sum += number ;
//         number++ ;
//     } 
// console.log(sum);
//Task 4 : Write a program to print numbers from 10 to 1 using while loop
// let number = 10 ;
// while ( number > 0 )
// {
//     console.log(number);
//     number--;

// }
//Activity 3 Do While Loop
//Task 5 : Write a program to print numbers from 1 to 5 using a do while loop
// var numberToPrint = 1 ;
// do{
//     console.log(numberToPrint);
//     numberToPrint++;
// }
// while(numberToPrint < 6 )
//Task 6 : Write a program to print factorial of a number using do while loop
// let n = +prompt ("Enter Number") ;
// let factorial = n ;
// do{
//     factorial = factorial * (n - 1) ;
//     n-- ;
// } 
// while ( (n - 1) > 0 )
//     console.log(factorial);
//Activity 4 Nested For loops
//Task 7 : Write a program to print patterns using nested for loop
// for ( let i = 0 ; i < 5 ; i++ )
// {
//     for ( let j = 0 ; j < i + 1 ; j++ )
//     {
//         console.log("*");
//     }
//     console.log("");
// }
//Activity 5 Loop Control Statements 
//Task 8 : Write a program to print numbers 1 to 10 and skip the 5 using continue  statement
// for ( let i = 1 ; i < 11 ; i++ )
//     {
//         if ( i == 5 )
//         {
//             continue ;
//         }
//         console.log(i);
//     }
    // Task 8 : Write a program to print numbers 1 to 10 but stop the program when number is 7 break  statement
    for ( let i = 1 ; i < 11 ; i++ )
        {
            if ( i == 7 )
            {
                break  ;
            }
            console.log(i);
        }