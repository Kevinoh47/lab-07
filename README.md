![CF](http://i.imgur.com/7v5ASc8.png) LAB - CRUD
================================================
## Travis
https://travis-ci.com/Kevinoh47/lab-07

[![Build Status](https://travis-ci.com/Kevinoh47/lab-07.svg?branch=working07c)](https://travis-ci.com/Kevinoh47/lab-07)

## Notes
This repo uses db.json as a data source. My db.json project is here: 
~/codefellows/toolkit/jsonserver
To run, go to ~/codefellows/toolkit/jsonserver/api/data and type json-server --id=_id --watch db.json

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment
###### Requirements
**Web Server**

* Modularize the server. Currently all of the code lives in the `lib/server.js` file.
  * Move the routes out to a separate file:  `lib/routes.js`
  * Create a new agent library, to be used by routes that will touch the API
    * *This is that you can mock the agent for testing purposes...*
  * You'll note that the website already has forms and links in place to add, edit, and delete categories, but when used, they will not work -- the server is not yet setup to handle them.
  * To that end, create routes and route handlers that will accept requests from the website for:
    * POST, PUT, DELETE
    * You will need to use method overrides in express to handle these
    * You will need to ensure that express has the correct parser middleware in place to handle the inbound data

**RESTy Client**

* Add a `<textarea>` so the user can input JSON
* Add a `<select>` so the user can select their REST Method
* Change the API call to send the right method and the JSON body

###### Testing
* Use `supertest` to test your server routes
* Mock the `agent.js` so that routes that would otherwise use the API will now use the mock instead
  * Remember - we're not testing the API, but instead are testing how we call it

###### Stretch Goal:
  * Style everything!


##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

