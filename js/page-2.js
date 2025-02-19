/*
first we'll need to collect both values, thankfully both the values are saved as easy to collect Id's called "value-1" and "value-2"
so thusly, we'll want to save those both as variables, both to practice saving variables, and collecting its value

const valueOneElement = document.getElementById('first-value');
const valueTwoElement = document.getElementById('second-value');

please write this out below (actually writting it helps with memeory so don't just copy and paste)
*/




/*
Next, lets make a function that adds the two values together using them as param's, and return the sum
[NOTE: I will be using the second method as I am the most used to it, however its easy enough to use the other obviously]

function addTwoValues(value1, value2) {
    let sum = value1 + value2;
    return sum;
}
*/



/*
Now, to call the function, we just write out the name, fill in the required parameters with the values of our elements
and save the return to the 'sum' element

const sumElement = document.getElementById('sum');

sumElement.innerHTML = addTwoValues(valueOneElement.innerHTML, valueTwoElement.innerHTML);
*/



/*
You may notice that its just combining the two numbers and not adding them, thats because we used the '+' operator on a string if a plus sign is used on a string it adds the two values together to create the combined string. 
so what we have to do is add a function that turns our strings into integers, to do that, we redefine the value of 'value1' and 'value2' as an int using 'parseInt()'

So within the function we write 

function addTwoValues(value1, value2) {

    value1 = parseInt(value1)
    value2 = parseInt(value2)


    let sum = value1 + value2;
    return sum;
}
now it works correctly!
*/