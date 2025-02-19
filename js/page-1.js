/*
here we will explain how to fix my abhorent spelling mistakes (I should be banished for spelling so terribly)

we will also explain how to set variables of elements
(you also dont have to worry about adding the script, I have already)

elements are the tags of html
p
h1 - h5
span
div
etc.. 
*/


/*
these elements can be collected in various ways, here I'll teach you 3 ways, and later on I'll teach another way!


 the first way we can select an element is using the element's ID, ID is like classes but are mainly used in JS (to my knowledge)
 in the html (you dont need to look I'll just say here), the first word has an ID of "banana" (wow the id is spelt correct but the word isnt dam.) anyways, we want to select that by using:
 document.getElementById('banana')
*/

/*
however, doing this will not allow us to do anything with it so we have to save it to a variable, like this:
const [YOUR VARIABLE NAME] = document.getElementById('banana')
*/

/*
once you have the variable, we're going to change the inside text by using '.innerHTML' (the value inside that then becomes a string of the text)
to rewrite it, we have to save over the value in there, for that we just use the '=' sign, so we write:
[variable Name].innerHTML = "[corrected spelling]"
*/

/*
the other methods to selecting are:

document.querySelector('.unique')
or
document.querySelector('#unique') 
(just like for css, we use a period to identify class, and a '#' for ID's)
*/