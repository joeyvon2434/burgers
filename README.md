# burgers
Quick summary: A simple burgers app to practice creating an entire web site using MVC, RESTful, and ORM principles of design. Uses javascript, node, express, MySQL, and handlebars. The site is deployed through Heroku using Jaws_db.


Burger Dive
Welcome to the Burger Dive ReadMe file.

Purpose: Practice using Node.js, Express, MySQL, handlebars, and HEROKU with the architecture principals of REST, MVC, and ORM.

Help: Feel free to contact me with questions at joseph.vonedwins@yahoo.com

Contributors: Created by Joseph Von Edwins

Getting Started:
It's best to vist the deployed Heroku site at https://arcane-chamber-53303.herokuapp.com/

The GitHub repository is located at https://github.com/joeyvon2434/burgers
but you probably know that if you're reading this file (lame joke, I know).

Details:
Burgers is a simple app that allows you to interact with ordering, and eating burgers. Upon loading the home page, the server uses a "GET" rrequest to pull the current burgers that are ready to be eaten, and the burgers that have already been eaten from the MySQL database. The burger lists are populated and styled using the handlebars templating engine. The burgers to be eaten have a button that represents eating the burger. When clicked, a "PUT" request is used to change the database to indicate that the indicated burger has been eaten. A new burger can also be added through the Order a New Burger Button. This route takes the burger name from the input field, and uses a "POST" request to add a new burger to the database. Have fun!

Potential Future Improvements:
A fixed menu could be implemented to allow the user to choose instead of creating a new burger. Pricing could be added, as well as functionality to add up a total cost. An administrator view could be added allowing someone with the proper credentials to update the menu and prices. The app could be turned into a simple cash register and inventory app with the proper authentications, database additions, and multiple views for different types of users.