# mvst-tech-challenge

This project is part of the tech challenge proposed by MVST and is 
about to develop a web app that allows you to display the Github repos through a search bar 
where you can filter them by the name of the repo. 

you can check the deployed version at 
https://mvst-tech-challenge.netlify.app


## Instructions on how to run it

1- If you want to start the project not from the deployed version, in dev mode, you can clone it through command line with 
 git clone https://github.com/marck-developer/mvst-tech-challenge.git

2- Make sure you are into the mvst-tech-challenge folder and install the packages by running the following command on the console:  npm i.

3- You can add a GitHub access token (more on that here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), and create a .env file, assign your token to the variable REACT_APP_GITHUB_AUTH_TOKEN and your GitHub username to the variable GITHUB_USERNAME.
This is not compulsary, just unauthenticated clients can make 60 requests per hour. To get more requests per hour, we'll need to authenticate. In fact, doing anything interesting with the GitHub API requires authentication.

4- Start the project by running the following command: npm start.


## Future improvements

This project was planned to be done in two days. 

Unfortunately for me, from the moment I started the project until this very moment I am ill, which has affected the execution of the project. 

There are several aspects to improve from the layout part where I should make more responsive (mobile first in mind) as well as show the results inside the box I created for that (now overflows).

Also on the back-end there are many possible improvements, from making a more refined filter that also allows me to search by username, etc... to refactoring the code to make it cleaner.  

Make the same project using Typescript, testing, use storybook and try GrapQL instead of Github API could be interesting to try.  
## Feedback about this exercise

I enjoyed doing this exrecise although the circumstances for me because I could use most of the techonologies I recently learned.
## Authors

- [@marck-developer](https://www.github.com/marck-developer)