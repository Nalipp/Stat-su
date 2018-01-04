## What is Tstudy?

TStudy is a place where aspiring developers can record what they are working on and share it with the world, Allowing you to find others who are studying what you are studying

## Tecnical overview

Backend api : Node app

Frontend : React

Deployment : heroku

## Instructions

### from the root directory (api server)

run dev environment
```
npm run dev
```

seed the dev database
```
npm run seed
```

run production environment
```
npm start
```

linting and security (eslint, nps)
```
npm run lint
npm run security-check
```

testing (mocha)
```
npm run test
npm run test-watch (automated)
```

### from the react-ui directory (react frontend)

run dev environment
```
npm start
```

create a new build version 
```
npm run build
```

### common dev pattern

have two servers running (the backend api and frontend react ui)

create a new build from inside react-ui

from inside the root directory, seed the database and run the dev environemnt

back inside react-ui run npm start and style the front end

## Work Log (x denotes finished)
x initial commit
x deploy
x config different databases for dev, production, test
x clean up formatting
x eslint
x github travis ci
x nsp security check
x readme
x initiate test suite
x test
  x model validations
x update readme
x test existing routes
x write crud with tests
  x create
  x retrieve by id
  x delete by id
  x clenup formating
x build react components
x style page
  x add textarea
  x listen for button press
  x deploy
  x reverse the order of the list items
  x change the highlight text color from default
  x create work and study buttons
x create dummy data
x update readme
x add url input on form
  x write model tests
  x update seed
  x write route tests
  x url routes
  x url input on form
  x add https:// if missing
  x only show a link if there is a url
  -test add https:// if missing
x focus should reset to Technology after submit
x error handling for too short or too long input
x error handling required description
x error handling page does not submit if form is not valid
x ui styling
x each list item has in the header
  x technology title (left)
  x start button with green border (right)
  x total time summary (right)
    
x after discription
  x link icon (after sentence)
  x trash icon (lower right corner)
x create delete functionality

**
  change delete functionality to hidden in archive
**


timer screen
  click on the stopwatch icon to begin timer screen
  when timer screen is ticking the background is green
  when timer screen is stoped the background is red
build mode slider
add icons
  link
  trash
toggle switch for study and build
create a footer
refactor css (add multiple classes to single component)
fix eslint for test files
fix travis
change language to technology in entire project
drag and drop using React DnD
