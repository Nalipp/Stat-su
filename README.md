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


  new TimeSlip document components
  - startedTime // tracks the last time the timmer was started
  - stoppedTime // tracks the last time the timmer was stopped
  - allTimes    // array that tracks all the times
  - totalTime   // tracks the total calculated times of all TimeSlip.allTimes

  steps
  - xclick the start button and display a green fullpage screen this page should have access to the list item data
  - xclick on the x in the upper right hand corner to remove the screen

  - xcreate a state.timeStopped in the TimeSlipItem component
  - xcreate a toggleTimer function that toggles the state of showTimer
  - xcreate a toggleTimeStopped function that toggles the state of timeStopped
  - xturn the background screen red if state.timeStoped === true
  - xturn the background screen green if state.timeStoped === false

  if timerRunning === true
  - xhide start button and show stop button

  if timerRunning === false
  - xshow start button and hide stop button

  if timerScreenShowing === true
  - xshow timer screen

  if timerScreenShowing === false
  - xhide timer screen

  xif user clicks start button -> timerScreenShowing === true
  xif user clicks x button (inside timer screen) -> timerStarted === false, timerScreenShowing === false

  move showTimerScreen to timeSlipTimer

  if timerRunning state is changed from false to true 
  - post to startedTime

  react
  x1. TimeSlipTimer
  - xmove timerStatus to TimeSlipTimer
    
  x2. TimeSlipList
  - xasync updateTimeSlipStartedTime
  - xasync updateTimeSlipStopedTime

  x3. api.js
  - xupdateTimeSlipStartedTime
  - xupdateTimeSlipStopedTime

  x4. models/timeslip.js
  - xupdate the timeSlip model

  xshow timer component

  xconvert seconds to minutes and hours
  - xconvert TimerDisplay to pure function

  xwrite tests for getting timeSlip by id
  xload totalTime for each component

  xfix timeSlip post bug

  xadd timeConverter function to totalTime

  xadd to TimeSlipItem
  - xcreated (convert to date)

  xpost last updated time and add to TimeSlip Item
  - xtests
  - xupdated (on TimeSlip ui with seed data)
  - xupdate when posting to TimeSlip

  xlisten for escape keypress to close timmer popup

  xadd icons
  - xlink
  - xtrash  
  - xplay
  - xstop

  xrefactor all css into styled components

  xfile structure

  xrefactor api calls

  xmedia queries using template literal mixins
  - x600px mobile media queries
  - x900px tablet media queries
  - x1200px desktop media queries
  - x1800px desktop jumbo media queries

  xfix validations
  - xremove all minimums
  - xreplace with max countdown?



  /-- current  


  refactor
  - xsummary components into cpt and cnt
  - refactor ItemCnt to use time format from time-utils
          // there is a bug with total time missing now (hard reset??)
  - move total time calculation to parrent TimeSlipCnt
  - update the total time calcusation state whenever time is submited and send the state to child summaryCnt


  /-- current  


  hamburger drop down to user page
  - xuser summary screen with unarchive option for each deleted timeSlip (white background)
  - xchange summray color
  - xextract time format into time-utils
  - xseed more archived data
  - xmore options for time conversion
  - xclean up warnings and lint
  - xpage should show all archived and unarchived timeSlips with concatenated discriptions with option to delete permentantly and add time
  - xarchived summary style

  - breakpoint styling (fix spacing on moble, time needs more space and shorten description)

  - close summary with escape
  - hook up trash and archive / unarchive
  - summary times should update without page refresh
  - seed real data


  choose different color themes?

  reorganize state into children so that parent only holds state if they need to

  add hover affects on icons

  clean up timer screen render
  - figure out timer blink bug
  - https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935

  ui
  - more space above main title (now that there is a hamburger) make the hamburger smaller?

  change CharCounter.js to CharCounterCpt.js

  upgrade dyno

  fix transistions
  - move transition from entire list to indiviual component (better for adding an item)

  change language to topic in entire project

  update readme
  - include explination of styled components (theme explination)
  - how to use icons
  - (other explinations?)

  remove auto caplitailization on mobile devices

  change project name
  - change to statsu.io
  - change heroku url
  - update github
  
  drag and drop using React DnD  

  fix travis  


  \* ****************************************************************************** \*
  future plans


  ---- phase 2 -----

  authentication

  React Router

  Redux 


  ---- phase 3 -----

  user summary with d3

  better data tracking
  - record timestamp for each subbmission

  convert milliseconds to hours above 99 hours


  ---- phase 4 -----

  profesional deploy

  premium users 

  accept payment

  new notebook option
  - summary of notebook
  - summary of all notebooks

  external links for user summary
  billable summary page 



****************************************************************************************************
resume links

styled-components
sgv icons
media mixins style-utils
