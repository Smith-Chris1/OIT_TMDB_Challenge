# OIT_TMDB_Challenge

# Challenges
## Webservice
Lets get the challenges out of the way. I have used nodejs in the past quite a lot. I have not used nodejs as an API server before, however it was relativly easy to setup and troubleshoot with postman. I was able to able to filter the response to the max of 10 and reformat it to the spec in the documentation. I would have liked to spend more time here filtering by populatiry or other fields that could provide a better user experience.

## Webapp
1. I have never used Vue or React before, and 4 hours to learn it wasn't enough for me. That said, I find how fast and fluid Vue and Nuxt are to be benefitial and I see why I would want to use this in the future. I have used Svelte a lot and the way you pass data from child to parent or vice-versa seems different, but that could be my quick reading of the documentation. 

2. While I was able to create a component that accepts an input string for the movie title and calls the backend API which successfully returns a response, I was unable to pass the response to another component to create the view in the client. The response does print to the console.log in the browser.

# Environment
1. I used a windows device so all my paths are \\, I'm not sure if you'll need to change them for Mac or Linux
2. I set the api_key in a .env file in the webservice folder. I didn't upload that to github as its not a wise move to put an apikey in a public repo. The structure of the file is: ```api_key=YOURAPIKEY```

# Installation
1. I have set github to ignore the node_modules directory, so you will need to install all the dependancies for the webapp and the webservice.
2. Download the zip and unxip the files to a directory.
3. navigate to the webservice directory and type ```npm i```
4. navigate to the webapp directory and type ```npm ci```

# Running
To run this outside of VSCode:

# Start the Webservice
1. Navigate to the webservice directory and type "nodemon run dev"
2. I chose nodemon so it would restart the server if there was an issue.
3. You can access the API from http://localhost:8080/status or http://localhost:8080/movies

# Start the Webapp
1. Navigate to the webapp directory and type "npm run dev"
2. You can access the Webapp from http://localhost:3000

# VSCode
1. If you're using VSCode, I have included a launch profile.
2. Open a new window in VSCode, open the directory containing the project, Navigate to the Run and Debug area in VSCode and select the 'webservice/webapp' profile.

# Followup
1. Although I wasn't able to complete the challenge I hope to hear from you about this position. 
2. I also want to state that the 4 hour time limit was respected, I stopped coding at 4 hours, but then spend another 45 minutes uploading to github and testing my instructions for you
3. **I know I won't be "graded" on this, but I was very close to completion and wanted to complete it as a MVP for myself. I have created a finished branch with it working as described in your document.
