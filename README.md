# Mercell Holding AS Task

## Explanation

This solution is made with Angular framework and TypeScript language. This is a 
quick one hour answer to the problem of displaying the list of products in a tree
and allowing to add new categories. It also includes validation for new 
categories the user can input.

Anyway, I know it isn't the best solution, as it renders more HTML tags than 
necessary, it's a quick one that orders the list and detects the level of the 
category for displaying based on a division.

With more time, I think the proper solution would be creating the correct data 
structure from the plain list with the `groupBy` method of the **lodash** 
JavaScript library. If we check its documentation, we can read the following:

>Creates an object composed of keys generated from the results of running each 
>element of collection thru iteratee. The order of grouped values is determined 
>by the order they occur in collection. The corresponding value of each key is
>an array of elements responsible for generating the key. The iteratee is invoked 
>with one argument: (value).
  
So, we can use it to group the categories recursively using every two digits 
starting from the most valuable digit as we know every code has 8. 

## Deploy task

Precondition: Node.js and NPM package manager should be installed.

Navigate to the root folder from a command line, install Angular and 
needed dependencies and run the project with the following commands. 

```bash
npm install 
ng serve
```

Then you can navigate to `http://localhost:4200/`. The app will automatically 
reload if you change any of the source files.
