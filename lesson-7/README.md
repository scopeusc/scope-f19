# Lesson #7: Making Interactive Portfolio Part II
We will continue building the interactive Portfolio that we made from last week. If you didn't come to 

last week's meeting, please clone the files in `lesson-6/myPorfolio`.



1. Currently our slider is static where we can only see the first image unless we click on the buttons on the bottom.

Let's try adding an animation effect to our slider so that the image is able to change after a given period of time.


2. In our `script.js` add the following code inside the superslides( ) function so that when our web page loads,

the slider knows its new behavior.

```js
$(document).ready(function(){
$('#slides').superslides({

animation: 'fade' ,
play: 5000

});

});
```


3. Now lets change the button style to previous and next arrows instead of pagination. Let's delete the current pagination

since we won't be needing it any longer.

```js
$(document).ready(function(){
$('#slides').superslides({

animation: 'fade' ,
play: 5000,
pagination: false

});

});
```

4. Let's now add the navigation code in `index.html` within the slides div.

```js

<div id="slides">
<div class="slides-container">
<img src="img/slide1.jpg" alt="">
<img src="img/slide2.jpg" alt="">
</div>

<nav class="slides-navigation">
<a href="#" class="next">Next</a>
<a href="#" class="prev">Previous</a>
</nav>

</div>

```

5. Now if you refresh the page, you will see that the previous and next buttons are looking kinda ugly. We can fix this

issue by adding our own icons. This [link] (https://icons8.com/) is a great resource for downloading app icons, and you guys

can browse through them and find your favourite icons to use for developing your future software. You can also use the current

set of icons provided within `lesson-7` folder 


6. Now we will add these icons to our web page. We will need to create a new file  `style.css` inside the `css` folder.

7. And we need to create a reference to this file in our index.html by adding 

 ` <link rel = "stylesheet" type= "text/css" href= "css/style.css"></link>`
 
 as well as deleting the text in the current prev and next buttons.
 
 so your `index.html` should look like the following: 
 
 ```js
 
 <!DOCTYPE html>
 <html>  
 <head>
 
 
 <title>My Portfolio</title>
 <link rel = "stylesheet" type = "text/css" href = "css/superslides.css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <link rel = "stylesheet" type= "text/css" href= "css/style.css"></link>
 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 </head>
 <body>
 <div id="slides">
 <div class="slides-container">
 <img src="img/slide1.jpg" alt="">
 <img src="img/slide2.jpg" alt="">
 </div>
 
 <nav class="slides-navigation">
 <a href="#" class="next"></a>
 <a href="#" class="prev"></a>
 </nav>
 
 </div>
 
 <script src = "js/jquery.superslides.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 <script src="js/script.js"></script>
 </body>
 </html>
 
 
 ```
 

8. We will first add the following code to specify the general structure of the two buttons. 

```js

.slides-navigation .prev,
.slides-navigation .next
{
width: 47px;
height: 47px;
background-size: cover;
background-repeat: no-repeat;
}

```

9. Now add the describtion for attributes of the two buttons inside `style.css` . 

```js
.slides-navigation a.prev
{
left: 20px;
background-image: url(../img/icons/prev.png);
}

.slides-navigation a.next
{
left: 20px;
background-image: url(../img/icons/next.png);
}

```

10. That concludes the implementation of image slider. We will now add a title

to our website.  Add the following code in your `index.html` within the slides div: 

```js
<div class= "titleMessage">
<div class= "heading">
<p class="main">YOUR NAME</p>
<p class= "sub">Software Engineer</p>
</div>
</div>
}

```

11. Add the following code in `style.css` to format our website title.

```js
.titleMessage{
position: absolute; 
width: 100%; 
height: 250px; 
top: 50%; 
z-index: 5; 
text-align: 
center; margin-top: -125px;
}

.titleMessage .heading p{
color: #fff;
text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
font-weight: 100;
letter-spacing: 7px;

}

.titleMessage .heading .main{
font-size: 50px;

}

.titleMessage .heading .sub{
font-size: 23px;

}

```

12. Before we move on, we need to add an overlay div in our `index.html` to 

format our slider, or else the text within titleMessage will not be shown. we do this

by adding the following code inside index.html inside `<div id="slides">`

```js

<div class = "overlay"></div>

```

so your `index.html` looks like: 

```js

<!DOCTYPE html>
<html>  
<head>


<title>My Portfolio</title>
<link rel = "stylesheet" type = "text/css" href = "css/superslides.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel = "stylesheet" type= "text/css" href= "css/style.css"></link>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<div id="slides">

<div class = "overlay"></div>
<div class="slides-container">
<img src="img/slide1.jpg" alt="">
<img src="img/slide2.jpg" alt="">
</div>

<div class= "titleMessage">
<div class= "heading">
<p class="main">YOUR NAME</p>
<p class= "sub">Software Engineer</p>
</div>
</div>

<nav class="slides-navigation">
<a href="#" class="next"></a>
<a href="#" class="prev"></a>
</nav>

</div>

<script src = "js/jquery.superslides.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
</body>
</html>

```

13. Now we add the following code into our  `style.css` 


```js
.overlay{
width: 100%; 
height: 100%; 
position: absolute; 
z-index: 3;
}


.slides-navigation 
{
z-index: 6;
}

```


14. The next step is to download this [github page](https://github.com/mattboldt/typed.js/) as zip file. And we will go into `lib` and copy out

the file `typed.min.js`  and move it to `js` folder of our project.

15. We need to create a reference to this file inside our `index.html`

```js
 <script src = "js/typed.min.js"></script>
```
under the reference for jquery superslides. 

16. Now we need to make the following modification:

where we change `<p class= "sub">Software Engineer</p>` to `<p class= "sub typed"></p>` inside `index.html`.

17. Inside our `script.js` we will write the following code to define attributes of the typed annimation.

```js
var typed = new Typed(".typed", {
strings: ["I am a Software Developer", "I am a Trojan", "I am an Scoper"],
smartBackspace: true,
typeSpeed: 70,
backSpeed: 35,
loop: true,
startDelay: 1000,
showCursor: false
});
```

This will be it for today, hope you guys enjoyed the content. 





