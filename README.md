# PORTFOLIO PROJECT - 2

# Rock Paper Scissors

## PURPOSE

Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision.

* [Here is a link to the final project GITHUB POST](https://nikki.github.io/Javascript_PP2/)
## FINAL DESIGN

![Final project image home page monitors](assets/testing/finaldesign.png)

## INITIAL IDEA CONCEPT

My initial idea for the project was to create a game that is simple to use and competitive. The game is for people of all ages as a light bit of fun!. I have choosen to give the game a christmas feel as I am submitting this in December 

<!-- * The Features of the game:

    * To have simple to read rules.
    * Have a contrasting colour scheme (Light blue and Yellow with Dark-Grey text)
    * Have a simple layout with 3 clear buttons with corresponding colours 
    * Look fun with images, and be educational -->
#  
## CONTENTS

- [PORTFOLIO PROJECT - 2](#portfolio-project---2)
- [ROCK PAPER SCISSORS](#rock-paper-scissors)
  - [PURPOSE](#purpose)
  - [FINAL DESIGN](#final-design)
  - [INITIAL IDEA CONCEPT](#initial-idea-concept)
- [](#)

  - [CONTENTS](#contents)
  - [UX/UI](#uxui)
  - [USER STORIES](#user-stories)
  - [WIREFRAMES](#wireframes)
  - [FEATURES](#features)
  - [DESIGN](#design)
- [](#-1)

- [TESTING](#testing)
  - [DEVICES](#devices)
  - [Validators](#validators)
  - [Lighthouse](#lighthouse)
  - [Game](#game)
  - [Accessibility](#accessibility)
  - [SOLVED BUGS AND ERRORS](#solved-bugs-and-errors)
  - [UNSOLVED BUGS OR ERRORS](#unsolved-bugs-or-errors)
  - [FUNCTIONALITY](#functionality)

- [TECHNOLOGIES USED](#technologies-used)
  - [PROGRAMS USED](#programs-used)

- [DEPLOYMENT](#deployment)

  <!-- - [CREDITS AND REFERENCES](#credits-and-references)
    - [IMAGES AND INFORMATION](#images-and-information)
    - [CODE](#code)
  - [ACKNOWLEDGEMENTS:](#acknowledgements)
      - [RETURN TO THE TOP](#return-to-the-top) -->

- [CREDITS](#credits-and-references)
  <!-- * [IMAGES AND INFORMATION](#images-and-information)
  * [CODE](#code) -->
- [ACKNOWLEDGEMENTS](#acknowledgements)



Introduction
Xmas Rock-Paper-Scissors-Lizard-Spock Game is a web based game and was built using JavaScript, HTML and CSS. It is based on the modern Rock Paper Scissor Lizard Spock a variant of the classic Rock/Paper/Scissors. This game is targeted towards users who would like a short fun game to play against a the computer.

Table of Contents

UX

The Strategy Plane
Rock-Paper-Scissors-Lizard-Spock Game is intended to be a light hearted game for an individual to play for a short period of time. 

Site Goals
- To provide users with a fun and simple game to play.
- To ensure that navigating the site is easy and intuitive for the user.
- To provide users with rules on how to play the game.
- To create a single page site that is easy to navigate through.
- To create a site that is simple in appearance by adding basic colours and layouts.
- To update the user wiith their progress throughout the game.

User Stories
- As a user I want a fun and simple game to play
- As a user, I want a clear understanding of the game rules and how to win.
- As a user, I want to see my score progress if I am the round winner.
- As a user, I want my opponents score to progress if I am the loser of the round.
- As a user, I want a message to appear, notifying me of the round winner.
- As a user, I want to be notified if I have won or lost the game.
- As a user, I want to be able to toggle the game audio on and off.


The Scope Plane
Features planned:
Responsive Design - The game/site should function correctly on screen sizes such as Mobile devices, Tablets, Laptops and Desktops for User to access. 
Navigation elements should be contained within the game screen.
Audio elements should be clearly visible to the user so that they can toggle audio on / off whilst playing the game.


The Structure Plane
User Story:
As a user, I want a fun and simple game to play.
Acceptance Criteria:
It should be clear how to play the game.
Implementation:
The layout of the foreground and background will make it clear for the userr to follow the game as it plays. There will be a button to the rules of the game on the page so the user can easily learn how to play and access information about the game.

User Story:
As a user, I want to know what the score is.
Acceptance Criteria:
It should be clear what both the user score and computer score is. This will let the user know if they are winning or not.
Implementation:
There will be a scoreboard that will display the scores for both the Player and Computer. 

User Story:
As a user, I want to know who won.
Acceptance Criteria:
It should clear who has won the overall game after all rounds haev been played.
Implementation:
There will be a modal that will appear on the screen that will display who has won and what the finishing scores were.

User Story:
As a user, I want to have some atmosphere included with some music.
Acceptance Criteria:
It should clear that a user can play audio music with a christmas theme whislt playing.
Implementation:
An icon will be on the page to allow the user to toggle the audio on the game either on or off.


The Skeleton Plane
Wireframe mockups;
My initial designs for the game were created in Balsamiq, to show how the game would appear across differnt devices. MODALS examples


The Surface Plane

Design:
I wanted to have some visuals for the user and decided to have a background for a christmas image and use the foreground to contain the game elements.

Background Image:
I wanted to give my site a chrismas theme and sourced the background vector image from vecteezy.com website where it is free for download and use. (vecteezy_mountain-winter-view-christmas-tree-background_.jpg)

Color Schemes:
To ensure that the colours used for different elements provided the required contrast ratio the colour codes were loaded into a contrast checker available at Contrast Grid.

<!-- PUT IN LINK TO CONTRAST GRID HERE
PUT IN JPEG of GRID colours used HERE -->

Typography:
Google fonts was utilised to find a font that would be clean and clear for all users, whilst still conveying an element of fun. I eventually settled on a choice of Festive and Mountains of Christmas.

Icons:
Font Awesome was used to create the hand icons for the game and audio buttons.

Features
The User can click on the Rules button that will open the modal with the instructions of how to play

The User having read the instructions can then play on the game screen and make their choice to play against the computer.

A display shows the current score for both players until the total amount of rounds has been played.

The end result is displayed showing whether the user or computer wins or loses the game. The display can be close then the game is ready for another play.

- Modals There are two modals available from the page, one for the rules of the game and one for the results.


Future Enhancements

Leaderboard - It would be nice for a player to enter their name and that their scores against the computer could be recorded onto a Leaderboard.

Snoweffect - I tried to have an animation of snow running 

Testing
Devices 
Android
Apple
Desktop/Laptops
Browsers
- Chrome
- Edge
- Firefox

Validator Testing
<!-- HTML
No errors were returned when passing through the official W3C Validator. Link Report HEre -->

<!-- CSS
No errors were returned when passing through the official W3C CSS Validation Service - Jigsaw. VLink Report HEre -->
https://jigsaw.w3.org/css-validator/validator


<!-- JavaScript
No errors were returned when passing through the validator service at JSHint.com. -->
https://jshint.com/


<!-- WAVE Web Accessibility
Three errors were returned in the WAVE web accessibility report which are detailed in the TESTING.md file along with the resolution -->

<!-- Lighthouse -->

<!-- Notable Bugs -->


Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the settings tab
Select the pages link from the setting menu on the left hand side
Under the GitHub Pages from the source section drop-down menu, select the master branch
One the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here -

Credits

http://ami.responsivedesign.is/#  is used to display responsiveness on different devices.

Media
The background image of the trees was obtained from Vecteezy.com
The favicon was created by using favicon-generator.org. The generator created both the image file and the link tag code for the head of the HTML file.

Content
CSS Styling
How to create the custom toggle switches used in the settings modal were developed from a tutorial on w3schools.

Reference Material
W3 Schools was used as a reference point for HTML, CSS and JavaScript
MDN Web Docs was also used as a reference point for HTML, CSS and JavaScript

Acknowledgements