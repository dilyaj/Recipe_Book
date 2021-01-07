What's For Dinner? is an app that I've always wanted to make. There have been so many times that I've looked curiously into the refrigerator, wondering what could come from the items inside.

Project Summary:
You, the user enters ingrediants in the form that are available to you. When submitted, dinner suggestions will be given back to you, along with descriptions of those dinner items.

Approach Taken: 
I really tried to understand what we did in class the past 2 weeks. I wanted to drill the concepts into my head, while learning new things, like Regular Expression and Model.find().

Features:
I created my own API using MONGODB atlas database and Postman with the Node/Express backend. I was able to style my app with react-bootstrap.
For a while, I thought I was styling with Bootstrap. but I was not. Next time, I will check which version I have if I am unsure.

Technologies Used:
Express, Mongoose, PostMan, MongoDB, Bootstrap

What Went Well:
I really enjoyed working with the backend this project. I like being able to follow directions and keeping things organized as possible. While doing this, I realized how using more components would have helped me keep everthing more neat. 

code example:
With Arthur's help, I was able to create a search route that would filter keywords in the array of dinner items. This search was created using POST, which was quite confusing for me during this project, because you would think it would be a GET route. POST means 'I am sending data to the server'. POST is a 2 way route, which means I send something and then I get something. So in this case, a POST method was necessary because the route needed an input to run.

In this route, I also used a Regular Expressions. RegExp help match charachter combos in strings. You can do some advanced searching with flags, I used the glags for  "global search", "case-insensitive search".

Model.find() - 
Model.find() accepts a *query* document (a JSON object) as the first argument,
and returns an *array* of matches. 
So in my search route, my Model was Recipe, because that's what I was searching through. I then passed in an object which was a JSON object and made it equal to searchQuery, and this was the finding/or filtering parameter. By doing this, it was able to return to me, filteredRecipes.. on PostMan. It was coming back as a 200 OK so I couldn't figure out why it wasn't returning anything or even giving me any errors on the server-side.


What Was The Biggest Struggle:
That was the biggest struggle for me on this project. This error made it very hard to move forward with other functionality or styling, but I did the best with the time and resources I had, admist travelling during the holidays. 

Last night, Madeline was able to help me get the server to give me an error, after we thought more about where req.body.searchQuery was being accessed. The error was  "Cannot read property JSON ‘0’ of undefined". This was one of the moments that I was so happy to get an error. By using JSON.stringify() I was able to resolve my issue.

JSON.stringify() - 
Transforms a JS object into a JSON string. I did use a replacer function here. It takes 2 parameters: the key and the value being stringified. If you return a Number, String, Boolean, or null, the stringified version of that value is used as the property's value. So here, ingredients was the value in the object. I was not getting an error of JSON undefined anymore!


Future Project Improvements:
I would like to continue working on this app and utilize "react-router-dom". I believe this will make my code more organized and easier to manage, as I had some frustrations with the lack of organization. I think this would also help me access more data from the API, making the app more dynamic and useful.