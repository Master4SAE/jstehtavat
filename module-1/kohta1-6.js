//1. Write a program that logs to the console this text: I'm printing to console! (1p)
console.log("I'm printing to console!");

//2. Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name! (2p)
let name = prompt("Please enter your name:");
document.write("Hello, " + name + "!");

//3. Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)
let num1 = Number(prompt("Please enter the first number:"));
let num2 = Number(prompt("Please enter the second number:"));
let num3 = Number(prompt("Please enter the third number:"));
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let avg = sum / 3;
document.write("The sum is " + sum + "<br>");
document.write("The product is " + product + "<br>");
document.write("The average is " + avg);

//4. In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
let nam = prompt("Please enter your name:");
let house;
let randomValue = Math.floor(Math.random() * 4) + 1;

switch (randomValue) {
    case 1:
        house = "Gryffindor";
        break;
    case 2:
        house = "Slytherin";
        break;
    case 3:
        house = "Hufflepuff";
        break;
    case 4:
        house = "Ravenclaw";
        break;
}

document.write(nam + ", you are " + house + ".");

//5. Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (3p)
let year = prompt("Please enter a year:");
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        document.write(year + " is a leap year.");
        } 
    else 
    {
        document.write(year + " is not a leap year.");
}

//6.Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
let answer = confirm("Should I calculate the square root?");
         if (answer == true) {
            let num = Number(prompt("Please enter a number:"));
            if (num < 0) {
               document.write("The square root of a negative number is not defined.");
            } else {
               let sqrt = Math.sqrt(num);
               document.write("The square root of " + num + " is " + sqrt + ".");
            }
         } else {
            document.write("The square root is not calculated.");
         }
 
