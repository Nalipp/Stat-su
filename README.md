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

  - xsummary components into cpt and cnt
  - xrefactor ItemCnt to use time format from time-utils
  - xchange SummaryItemCnt to SummaryListCnt
  - xchange SummaryHeadingCpt to CloseMenuCnt and style with MenuControlCpt

  - move the filtering mecanism to the TimeSlipContainer and setState for the results to fix bug of Summary time not updating
  1. xfilter on page load for TimeSlipContainer into setState ActiveTimeSlips and ArchivedTimeSlips (pass each to SummaryListCnt)
  2. xupdate SummarylistCnt to iterate over the new states arrays instead of filtering all
  3. xrefactor ListCnt to that is only recieves active time slips instead of filtering out again
  4. xupdate TimeSlipsCnt to setState to activeTimeSlips when a new slip is created
  5. xdo the same for delete, and archive
  6. xhook up archive functionality to test if changes are made to the SummaryCnt without page refresh

  xremove timeSlips from TimeSlipCnt

  xwhenever a time submission is made it should increase the totalActiveTime
  1. xfind where totalTime state is updated
  2. xpass a function from SummaryCnt that updates the totalActiveTime when totalTime is updated

  xadd truncate to language and description

  xmove SummaryListCnt to SummaryListCpt

  xfix transistions
  xblink TotalTime in timerScreen after time submit only
  xfade in screen color on timerScreen start to stop

  xclean up timerScreenCpt conditional statements

  xfix timeslip update in summary by reloading all timeslips on summary page load

  xmove Icons svg into seperate file

  xadd transistion delay to prevent too many archive requests all at once
  1. xmove the sthowAnimationScreen state in SummaryCnt
  2. xdelete the ListSummaryCnt component file and remove from SummaryCnt and reimplement the LisSummaryCpt in SummaryCnt instead
  3. xconditionaly display the SummaryCpt only or the SummaryCpt and the delayAnimationScreenCpt together
  4. xpass a function to SummaryItemCpt that controls the state of showAnimationScreen in the parrent SummaryCnt

  xhamburger drop down to user page
  - xuser summary screen with unarchive option for each deleted timeSlip (white background)
  - xchange summray color
  - xextract time format into time-utils
  - xseed more archived data
  - xmore options for time conversion
  - xclean up warnings and lint
  - xpage should show all archived and unarchived timeSlips with concatenated discriptions with option to delete permentantly and add time
  - xarchived summary style

  xclick on icon wrapper not on icon

  - xmore padding on the top of the mobile timerScreen

  xicon issues
  - xinclude the close icon for timer screen as a controlCpt
  - xprops option for setting colors
  - xstyle height and width media breakpoints in MenuControlsCpt to control icon size

  x move timerScreenShowing ? from ItemCpt to ItemCnt


  /-- current  



  seed m-lab data



  /-- current  


  time is not updating!!

  update readme

  create add button


  timer delay for archive on listItem
  1. open delay for archive and delete in Summary
  2. implemenent the same for archive in ListItem

  ui
  time is getting cut of on desktop (need to reduce font size of time only)
  still don't have escape functionality for summry screen

  remove auto caplitailization on mobile devices

  organize files into folders
  - change CharCounter.js to CharCounterCpt.js
  - change HamburgerMenuCnt to MenuHamburgerCnt and MenuCloseCnt

  clean up code using ...props



  /-- portfolio stage

  seed real data (fix time format bug)

  change project name
  - change to statsu.io
  - change heroku url
  - update github

  upgrade dyno

  update readme
  - include explination of styled components (theme explination)
  - how to use icons
  - (other explinations?)
  - thoughts
  
  /-- portfolio stage


  /-- later

  change delayedDelete in SummaryItemCpt to a popup screen that asks if you are sure you want to delete

  choose different color themes?

  fix travis  
  
  /-- later



  \* ****************************************************************************** \*
  thoughts

  Before leaning Readux I wanted to build a project without it

  Even though there is only one model there are three different possible screens being displayed

  Passing state across all three screens is becoming burdensome

  Refactor into better containers and components it is also difficult without a test suite to rely on

  Instead it is probably better to implement Redux to handle state, then refactor and add tests


  \* ****************************************************************************** \*
  future plans


  ---- phase 2 -----

  authentication

  React Router

  Redux 

  testing suite

  drag and drop using React DnD  


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
