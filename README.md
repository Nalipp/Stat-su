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
  xinitial commit  

  xdeploy  

  xconfig different databases for dev, production, test  

  xclean up formatting  

  xeslint  

  xgithub travis ci  

  xnsp security check  

  xreadme  

  xinitiate test suite  

  xtest
  - xmodel validations  

  xupdate readme  

  xtest existing routes  

  xwrite crud with tests
  - xcreate
  - xretrieve by id
  - xdelete by id
  - xclenup formating  

  xbuild react components  

  xstyle page
  - xadd textarea
  - xlisten for button press
  - xdeploy
  - xreverse the order of the list items
  - xchange the highlight text color from default
  - xcreate work and study buttons  

  xcreate dummy data  

  xupdate readme  

  xadd url input on form
  - xwrite model tests
  - xupdate seed
  - xwrite route tests
  - xurl routes
  - xurl input on form
  - xadd https:// if missing
  - xonly show a link if there is a url
  - -test add https:// if missing  

  xfocus should reset to Technology after submit  

  xerror handling for too short or too long input  

  xerror handling required description  

  xerror handling page does not submit if form is not valid  

  xui styling  

  xeach list item has in the header
  - xtechnology title (left)
  - xstart button with green border (right)
  - xtotal time summary (right)
      
  xafter discription
  - xlink icon (after sentence)
  - xtrash icon (lower right corner)  

  xcreate delete functionality  
  xarchive functionality
  xarchive tests
  xupdate archive from delete to hide

  /-- current  

  new TimeSlip document components
  - startedTime // tracks the last time the timmer was started
  - stoppedTime // tracks the last time the timmer was stopped
  - totalTime   // tracks the total calculated times of all TimeSlipTimes

  steps
  - xclick the start button and display a green fullpage screen this page should have access to the list item data
  - xclick on the x in the upper right hand corner to remove the screen

  - create a start time component that changes the state.timeStopped === false (should be hidden if state.timeStopped === false)
  - create a stop time component that changes the state.timeStopped === true (should be hidden if state.timeStopped === true) 
  - turn the background screen red if state.timeStoped === true
  - turn the background screen green if state.timeStoped === false

  if start time is clicked
  - post startedTime Date.now
  - setState timeStopped === false 
  - display timer

  if stop time is clicked
  - post stoppedTime Date.now
  - post totalTime plus stoppedTime - startedTime
  - setState timeStopped === true
  - remove timer

  /-- current  

  hamburger drop down
  - unarchive screen  

  build mode slider  

  add icons
  - link
  - trash  

  create a footer  

  refactor css (add multiple classes to single component)  

  fix travis  

  change language to technology in entire project  
  
  keep track of all timeSubmissions in an array attached to the TimeSlip document

  drag and drop using React DnD  

