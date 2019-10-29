# Lesson #6: Making Interactive Portfolio Part I
We will be building a mini interactive portfolio website using jQuery and Bootstrap within Javascript

## Setup

1. We will first create a folder named `myPortfolio`.


2. Open your `myPortfolio` using any editor of your choice and create a file named  `index.html`.


3. Inside `index.html`, type the following code. You can run your code by clicking on the `index.html` file and the system will direct you to the web page you defined. 

```js
<!DOCTYPE html>
<html>  
<head>
<title>My Portfolio</title>

</head>
<body>
Hello World! 

</body>
</html>

```
You should be able to see "Hello World!" on your website when you are done with this step.

4. Now we will be adding jQuery to our project. jQuery is a JavaScript library and you can read more about it [here](https://www.w3schools.com/jquery/jquery_intro.asp).

We add jQuery by using the following cdn link: 
```js
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
```
5. Our next step is to add Bootstrap into our current project. We will download [Bootstrap](https://getbootstrap.com/) by copying the following CDN:

```js
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

```
add them to our code where `<link>`  is directly below `<title>`  and `<script>` is directly above `</body>`. Your code should look like this: 

```js

<!DOCTYPE html>
<html>  
<head>


<title>My Portfolio</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
Hello World!

 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>

```

5. With the setup out of the way, we can finally move on to the exciting part. We will incorporate superslide into our project by visiting this [github page](https://github.com/nicinabox/superslides). 

We will download the repo as a zipfile. The only file that we need is  `jquery.superslides.min.js`  inside `dist` so drag it out :D . 

6. Lets make another folder under  `myPortfolio` and name it `js`. We will then drag `jquery.superslides.min.js` into this folder. 


7. We will then make another folder `css` under `myPortfolio`. We will go back to the superslides repo we downloaded

from github and drag out `superslides.css` inside `stylesheets` into our own `css` folder. 


8. Now we need to create reference to the files we recently added to our folder. We can create file reference to the css file by typing the following: 

```js

<title>My Portfolio</title>
<link rel = "stylesheet" type = "text/css" href = "css/superslides.css">
...

```
We also need to create a reference for the superslides Javascript file 

```js

<script src = "js/jquery.superslides.min.js"></script>


```

Now your code should look something like this: 

```js

<!DOCTYPE html>
<html>  
<head>


<title>My Portfolio</title>
<link rel = "stylesheet" type = "text/css" href = "css/superslides.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
Hello World!
<button>Iron Man</button>

<script src = "js/jquery.superslides.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>

```

9. Now we can finally start using superslides in our own code, we will create the following div inside <body>:

```js

    <div id="slides">
    <div class="slides-container">
    <img src="http://via.placeholder.com/350x150" alt="">
    <img src="http://via.placeholder.com/350x150" alt="">
    </div>
    </div>
```
This is basically saying that we are creating an instance of image slider of two images, where currently both images are just

two image placeholders. 

10. Before our website can display the image slider, we need to initialize the slider first. We do this by creating

a new file called `script.js` in the folder `js`. 

11. We need to again refer to this file by adding:

```js

<script src="js/script.js"></script>
</body>

```



12. Inside script.js, wee need to add the following: 


```js

$(document).ready(function(){
$('#slides').superslides()

});

```
The syntax may look a little scary but essentially what it does is the program will execute the function before 

the webpage loads, and the function is calling the initializing function of image slide. 

13. Now your code should look like thw following: 

```js

<!DOCTYPE html>
<html>  
<head>


<title>My Portfolio</title>
<link rel = "stylesheet" type = "text/css" href = "css/superslides.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">




<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<div id="slides">
<div class="slides-container">
<img src="http://via.placeholder.com/350x150" alt="">
<img src="http://via.placeholder.com/350x150" alt="">
</div>
</div>

<script src = "js/jquery.superslides.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="js/script.js"></script>
</body>
</html>



```

14. We will conclude today's lesson by adding our own preferred images into the slider instead of using the 

image placeholders. Try this part on your OWN :D :D :D :D :D 

HINT: what happens if we replace `http://via.placeholder.com/350x150` with reference to the location of the images we want to add? 


