/*
this one will work slightly different than the others will, here we will just be making a simple list of integers.
Then, using the forEach() method, apply a simple multiplication method to multiply it!


Ok, so first we save the list to a vairable, and fill the list with numbers
there are multiple ways to add values into a list, but we'll just do the simplest by adding it directly to the list.

let listVariable = [1, 3, 4, 52]


(add whatever numbers you want :3  )
*/



/*
We are now going to use .forEach() method. When using .forEach you'll attach it to a list, then set the parameters or aspects you'll use

list.forEach( (Value, Index, List) => {})

the value is the value that the function is using on it, index is the position it is on the list, and list is the full list itself.

lets use .forEach() to print out all the items in our list. to do this write down this:


listVariable.forEach( (item, index) => {
    document.querySelector('.prob-7').innerHTML += `<li> item ${item} at index: ${index} </li>`
    })
*/



