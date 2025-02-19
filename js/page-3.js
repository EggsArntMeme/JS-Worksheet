/*
First lets collect the Form in general, Since there is only one form on the page, we don't have to care about being too specific
so we'll just simply go 

*/
const form = document.querySelector('form');


/*
Next, we'll make an event listener for the form here. Here I'll show off the second method, both because it seems to be the more popular within the class, (and so I can practice it myself haha)

so what we'll do is grab the form element variable we set up and add the 'addEventListener()' method to it

form.addEventListener()



here, we'll listen out for the 'submit' event, which is whenever the submit button is clicked!

form.addEventListener('submit')



lastly, we'll add in the function, now, as seen in the first way on the webpage, you can create a seperate function and call it here, or you can write  /  define a function within the eventListener, the ladder is what we'll use here (making sure to add the 'event' as a param)

form.addEventListener('submit', (event) => {

})



[this one above is the final version]
*/



// next, everything we write will be within the event listener, aka just indented and within the sqwiggly brackets ( '{}'  < those)


/*
The first thing we'll do is prevent the default action of the submit button. By default, the submit button will reload the page, losing all the text written within the textbox, since we want to actually keep that information, we'll stop that by using:

event.preventDefault()
*/





/*
just for practice, we're gunna learn a new way to select an element. 
This method is especially good for when we have an element that has children that we want to select
[children are bascially objects or elements within another object or element, respectfully called the parent to the children]
since this method will output a list / array without specification, we will specify by using square brackets ( '[]'  < those)

form.elements['textbox']


However, there is a special way we can write it since we're in an event listener, using 'event.target'.
'event.target' simply is a variable of the element was targeted by, in this case the form! (you can check who the target is by just seeing who the event listener method is being used on)

event.target.elements['textbox']

(this way is perfered as it allows our function to be used by mulitple forms saving lines of code, however we won't need to worry about that for a good bit now lol)
*/



/* 
Almost done! we just now need to select the favfruit element and change the html inside it! 
we'll change it to the value, or input of the textbox
(note how we can't use '.elements' here because its not a child of the form)

const favFruitElement = document.querySelector('#favFruit')
favFruitElement.innerHTML = textbox.value
*/






// with all that done we should be good to go!






