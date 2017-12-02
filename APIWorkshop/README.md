# APIWorkshop
Follow the instructions below for this tutorial:

## Instructions
Each method in `script.js` marked with `TODO` will be where you place your code.

### Task #1
Our first task for you to get familiar with jQuery, is creating a popup that will ask for a user's name and update the page. We will be writing our code in the `getName()` function.

To get started, let's look at: https://www.w3schools.com/js/js_popup.asp

This method will also be using variables to store a user's name, and conditionals `if` and `else` to determine what to do when a user doesn't write in their name.  (ex. Display "Stranger" instead of a name)

(You can look at documentation that will explain these concepts: https://www.w3schools.com/js/js_if_else.asp. Or ask an available mentor.)

Once we've gotten a string (or name), we will need to append it to our header with the `#title` id. We can ignore the `changeColor()` function for now but it essentially calls a function needed for our second task.

### Task #2
Our second task is animating a circle. The circle is already created for you, the challenge will be to change its width so that it grows in size and then shrinks to its original shape when you click on it.

You will be writing your code in the `changeBackground()` function.

Some suggestions on how to start:
- look at jQuery `animate()` documentation: https://www.w3schools.com/jquery/eff_animate.asp
- consider using `if` and `else` (conditional) statements in your code.
- consider using a variable/s: https://www.w3schools.com/js/js_variables.asp

### Task #3

Our third task requires us to work with GIPHY API. An API stands for Application programming interface. API's are used as tools for developers to build applications/websites.

We will be exploring GIPHY API:
https://developers.giphy.com/docs/

To use GIPHY API, we will be needing something called an API Key which will grant us access to use GIPHY API. Click on `Create an App` to create a GIPHY account and get an API key. To view you API key, go to: https://developers.giphy.com/dashboard/.

We will be using the Random Endpoint for GIPHY found in the docs: https://developers.giphy.com/docs/. What we will be doing is sending a request to `api.giphy.com` for a GIF. We will be doing this using AJAX: https://www.w3schools.com/jquery/jquery_ajax_get_post.asp.

AJAX will allow us to exchange data with `api.giphy.com` and update our website without reloading. jQuery gives us methods that will make it easier for us to write our AJAX method. We will be sending a `GET` request to GIPHY. `GET` requests are used to retrieve data from a url.

The tricky part is figuring out the url we should send our request to. We can look at GIPHYDevelopers documentation for some help.

(Be sure to write your code in the `searchGiphy()` function.)

Also, we should note that once we find our host url we will be using a `?` to separate it from our arguments that we will be sending such as our API key and our tag that will specify the GIF we want to get. Each argument is then separated by an `&`.

Once we successfully send our request, we will be able to get the data we want by creating an `<iframe>` object with the `src= var url = 'https://giphy.com/embed/' + data['data']['id'];` A useful tip would be to look at stackoverflow for how to do this. We then append our `<iframe>` object to our task3 div.


### Fun Challenges

Our Fun Challenge #1 will be to change your cursor to an image icon whenever you hover over the forest image. For example, this image can be a snowman. This is mainly a CSS task and you can google CSS cursor to figure out how this works.
