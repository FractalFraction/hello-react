## React

## Set-Up

Empty Working Directory
Set up a react app

Helper tool to set up react.

```
npx create-react-app <name of directory/project>
```

I'm in a directory where I create all React apps. Then I have specific project directories.

Initialises git automatically. Gives some commands you can run!

Why?

- Change some javascript that is too advanced for browser

Does not come with Cypress by default. What aou

## Starting a React App

```
npm start
```

Runs the app in the development mode in the browser.

Test what the default commands do!

## Structure of a React App

#### Source

Focus on App.js and index.js in the source folder.

Use (import ... from) syntax i.e ES6 modules.

index.js entry point for ??

#### Public

Don't add to HTML directly!

React components couple together HTML and JavaScript. Let's wrap all things together. Insert what we need by inserting the app into the root. Don't touch index.js!!!

In React a component is denoted by,

```
<App>,
```

e.g an App component! (Can see in the render part of a index html file)

The App component is stored in App.js.

Everything is loaded inside this element.

## Adding new components

## Test Driving using React

### Feature Tests

Install cypress and run it (after running React application).

In cypress.json remember to set baseURL according to the React app README.md.

Create a spec in cypress. Comment what you want to do first.

### Components Tests

Similar idea to unit tests but for react components.

Each component should have a component test!

Test runner using jest (behind the scenes). Using React specific test runner.

Look at App.test.js as an example

```
npm test
```

Check package.json to tell what command it is actually running, tests it is running!

Tests are dynamic and can be updated in the background.

Text Rendering - Once the text is rendered what is seen. Is it correct?

Note the component tests are stored in the /src folder !!! Why?

Structure (psuedocode)
import <testing framework>
import <component>

<render the component>
<do a test query>
<assert something>

## Components

Simple Overview

1. The component is a function with a return statement
2. It is exported.
3. Import a component into the main App.js file.

Always return one html element. Does it need to be <div>? No, it can be any HTML element.
Remember to include any necessary ids in the component!

In React, we can add HTML inside a "JavaScript" component file but underhood React is doing things to convert it into real Javascript.

Rendering a component, inside you App.js file within your return element write <Component /> for your component Component.js.

Only return one HTML element -- otherwise it won't render!!!

## Questions

- Why use React?
- Why use create-react app? Is it already installed?
- What package dependencies does react need?
- How is using React different to what we did last week?
- How to organise all your react projects?
- What files are in a default React project?
- Does it have a .gitignore file automatically? A package.json automatically?
- What is a public folder?
- Does it come with testing frameworks? Cypress? Jasmine?
- What is a top element component?
- How to write Jasmine tests using React? Does it work the same way as before?
- Index.js is an entry point -- What does that mean? To do with loading all the react components?
- What is a component test? Similar to a unit test?
- Should we test from a user perspective for now? Not worry about the logic layer to much?
- How to write logic in react? Does it blend the logic and interface layer?
- What does export default mean?
- Does the return in the App always need to return a <div class=App >?
- What are some common query methods in React?
- What are official names for things?
- Is nesting good or not? Depends on how you want to encapsulate your components? Need to refactor?
