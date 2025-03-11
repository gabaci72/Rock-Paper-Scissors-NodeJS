# Rock-Paper-Scissors NodeJS Project:
## Introduction
Did you know that the game Rock-Paper-Scissors can be dated back to the Han dynasty (206 BCE - 200 CE)?

Using your knowledge in Node.js, let’s create an online version of Rock-Paper-Scissors where you can play against the HTTP server. Using the http module, we will build a simple HTTP server. We will practice how to route requests based on pathname and request methods. We will also be using other core Node.js components in this project—we will use the fs module to stream HTML files and create an URL object to extract queries from a URL.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Code review available when you’re done

## Creating a Server
[X] 1. In this project, we will use the built-in http module to create a server. Let’s require the http module at the top of app.js.

Remember that you can include a module using the require() function like below:
```js
const moduleName = require('moduleName');
```

[X] 2. Next, using the .createServer() method, create an HTTP server and save it as a const variable called server. Using the arrow function expression, create an anonymous callback function that recieves request and response as arguments.

You can create an anonymous function using the arrow function syntax like below:
```js
const myFunction = (argOne, argTwo) => {
  // Do something
}
```

## Routing
[X] 3. Inside the callback function of the .createServer() method, create a new URL object and save it to a const variable called url. Initialize the URL object with two arguments: request.url and http://${request.headers.host}.

URL is like any other JavaScript object. You can create a new instance of it like below:

```js
const url = new URL();
```

Provide the constructor function with appropriate arguments.

[X] 4. Now, let’s create a switch statement that evaluates the value of url.pathname. Inside the switch statement, create two cases: a case that matches '/' and a default case.

Remember that the syntax for creating switch statements in JavaScript looks like below:

```js
switch(expression){
  case valueOne:
    // Do something for this case
    break;
  case valueTwo:
    // Do something for this case
    break;
  default:
    // Do something by default
    break;
}
```

## Handling Get Requests
[X] 5. Inside the case for '/', create an if statement that checks if the request method is equal to 'GET'.

Remember that you can get the request method by accessing the method property of the request object.
```js
console.log(request.method);
```

[X] 6. Inside the if statement checking for 'GET' requests, create a const variable called name and save the value of the 'name' query using url.searchParams.get() method.

Log the value of the 'name' query to the console.

The .get() method of url.searchParams takes a string for the query key as its argument.

[X] 7. Next, still inside the if statement checking for 'GET' requests, write a response header. Set the status code as 200 and the status message as a JSON array that contains the 'Content-Type' key and 'text/html' value.

Remember that you can write a response header using the .writeHead() method of the response object.
```js
response.writeHead(statusCode, {
  // Headers go here
})
```

[X] 8. We will want to display the index.html page when users access the root of our website.

Let’s read our index.html file using the .createReadStream() method of the fs module and pipe the data to the response by chaining the .pipe() method.

Then, add a break statement at the end of the if statement code block.

You can chain the .pipe() method to the .createReadStream() method like below:
```js
fs.createReadStream('filename.ext').pipe(destination);
```

## Handling Post Response
[X] 9. Let’s handle another request method! Create an else if statement that checks for the 'POST' request method.

Inside the else if statement, call the handlePostResponse() function, defined at the bottom of app.js. Pass in request and response as arguments of the function.

Then, add a break statement at the end of the else if statement.

Remember to add the break statement AFTER the handlePostResponse() function call!

## Handling Default Case
[X] 10. Let’s complete our switch statement. Inside the default case, we will display 404.html if a user tries to access a page or a file that doesn’t exist.

Write a response header using the .writeHead() method of the response object. Set an appropriate status code for a page or file not found and the status message as a JSON array that contains the 'Content-Type' key and 'text/html' value.

404 is the status code for Page/File Not Found.

[X] 11. Now, read 404.html using the .createReadStream() method of the fs module and pipe the data to the response by chaining the .pipe() method.

Then, add a break statement at the end of the code block.

Remember that you can chain the .pipe() method right after .createReadStream().

## Running the Server
[X] 12. Finally, let’s have our server listen at port 4001 using the .listen() method. As the second argument of the .listen() method, create an anonymous callback function using the arrow function syntax.

Inside the callback function, log that the server is listening at server.address().port.

Remember that you can pass in a callback function defined using the arrow function notation as an argument like below:

```js
myFunction(argOne, () => {
  // Do something
});
```

[X] 13. Try out our Rock-Paper-Scissors game by running the app with the node command then clicking on the “Refresh Browser” button.

Add a name query with your name as its value. For example, try navigating to http://localhost:4001/?name=Codey. See that the header text in index.html changes!

Can you win 3 games in a row?

Make sure you run node app.js BEFORE clicking on the “Refresh Browser” button!

Code Review
Get targeted feedback about your code and how well it meets the objective of the project.
You can request 1 AI-powered review per project when you complete all tasks.
