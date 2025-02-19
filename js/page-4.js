/*
Alrighty, so to start out we'll grab the first and second values, both use '#first-value' and '#second-value' respectivly, so their easy enough to grab. Just save them to a respectable variable name and instead, lets use 'let' instead of const for this one, you'll see soon.


let elementValue1 = document.querySelector('#first-value');
let elementValue2 = document.querySelector('#second-value');
*/
let elementValue1 = document.querySelector('#first-value');
let elementValue2 = document.querySelector('#second-value');


/*
to immedietly show off why we changed from const to let, we're going to save over these variables. We only collected those variables to get the text inside them, and we're not going to call on them again, so no need to keep them. 

elementValue1 = elementValue1.innerHTML
elementValue2 = elementValue2.innerHTML


now we can stop here, but since we're compairing numbers, and we know they're both integers (numbers with no decimal), lets just get the parseInt (changing a string (series of characters) into an integer)


elementValue1 = parseInt(elementValue1.innerHTML)
elementValue2 = parseInt(elementValue2.innerHTML)

*/

elementValue1 = parseInt(elementValue1.innerHTML)
elementValue2 = parseInt(elementValue2.innerHTML)


/*
now to the if statement! First we will write out the first condition, if value 1 is equal to value 2, to do this we will have within rounded brackets ( '()'  < those) 'elementValue1 == elementValue2'  (minus the quotes obv)
if (elementValue1 == elementValue2) {
  . . .
}
*/


/*
inside the if, we're going to grab the span that uses the '#equals' id and change the inner HTML! Since we don't plan to call on it again, we can just put in 

document.getElementById('equals').innerHTML

now, since this code will only run when the two are equal, we should change the text to say something like "yes, it is equal" or something like that


document.getElementById('equals').innerHTML = "AFFIRMATION OF CORRECTNESS"
*/





/*
"Well what should we do if its not equal?" WELL WE SHOULD SAY SOMETHIN!! to do that, we'll use else, simply add it to the end of the if like this

if (elementValue1 == elementValue2) {
    document.getElementById('equals').innerHTML = "AFFIRMATION OF CORRECTNESS"
} else {
    . . . 
};

and since we're just changing the inside text there again, we can just copy the code from above but swap out the dialog


if (elementValue1 == elementValue2) {
    document.getElementById('equals').innerHTML = "AFFIRMATION OF CORRECTNESS"
} else {
    document.getElementById('equals').innerHTML = "nah"
};
*/




/*
finally, I'll have you test your skills by writing the next three! 
the three id's for the next ones are (in order): #not-equals  #greater-than  #less-than
good luck!!

(tip: you can actually just copy and paste the previous if statement and just change the Comparison Symbols )
*/


