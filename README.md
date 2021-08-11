In this project let's build a **Mini Games** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view the UI Prerequisites</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/0Xb6dvddTvmVuzm6Ku1YL3/Mini-Games?node-id=0%3A1" target="_blank">here</a>.

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- Home Route
  - Users should be able to see the list of games.
  - Users should be able to play all the games by clicking any of the games.
- Emoji Game Route
  - When the user clicks on the **Emoji Game** Card, the user should be navigated to the Rules page of the game.
  - On the Rules page, users should be able to see the Rules of Emoji Game.
  - When the user clicks on the `Start playing` button, the user should be able to play the Emoji Game.
  - On the game page, the user should be able to see the Rules Button
  - When the user clicks on the `Rules` button, it should trigger a popup, and the image of the rule should be displayed
  - **Game Rules:** <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-rules-v2.jpg" alt="emoji game rules" style="width:400px, height:400px" />
- Rock Paper Scissors Route
  - When the user clicks on the **Rock Paper Scissors Game** Card, the user should be navigated to the Rules page of the game.
  - On the Rules page, users should be able to see the Rules of Rock Paper Scissors Game.
  - When the user clicks on the `Start playing` button, the user should be able to play the Rock Paper Scissors game.
  - On the game page, the user should be able to see the Rules Button
  - When the user clicks on the `Rules` button, it should trigger a popup, and the image of the rule should be displayed
  - Initially, the score displayed should be 0.
  - When the user clicks on any of the 3 buttons (rock/paper/scissors), then the game result should be displayed by comparing with computer choice.
  - In the game result, the computer choice should be generated randomly.
  - **Game Rules:** <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissor-rules-v2.jpg" alt="rock paper scissor rules" style="width:400px, height:400px" />
  - In the Results page, When the `PLAY AGAIN` button is clicked, then the User should be navigated to the game page where the user should be able to play the Rock Paper Scissor game.
- Memory Matrix Route
  - When the user clicks on the **Memory Matrix Game** Card, the user should be navigated to the Rules page of the game.
  - On the Rules page, users should be able to see the Rules of Memory Matrix Game.
  - When the user clicks on the `Start playing` button, the user should be able to play the Memory Matrix game.
  - On the game page, the user should be able to see the Rules Button
  - When the user clicks on the `Rules` button, it should trigger a popup, and the image of the rule should be displayed
  - **Game Rules:** <img src="https://assets.ccbp.in/frontend/content/react-js/memory-matrix-rules.jpg" alt="memory matrix rules" style="width:400px, height:400px" />
  - <a href="https://www.npmjs.com/package/rc-progress" target="_blank">Progress bar</a> should be displayed in the results page based on the User completion level
- Card Flip Memory Game Route: -
  - When the user clicks on the **Card Flip Memory Game** Card, the user should be navigated to the Rules page of the game.
  - On the Rules page, users should be able to see the Rules of Card Flip Memory Game.
  - When the user clicks on the `Start playing` button, the user should be able to play the Card Flip Memory Game.
  - On the game page, the user should be able to see the Rules Button
  - When the user clicks on the `Rules` button, it should trigger a popup, and the image of the rule should be displayed
  - **Game Rules:** <img src="https://assets.ccbp.in/frontend/content/react-js/card-flip-rules.jpg" alt="card flip memory rules" style="width:400px, height:400px" />
- Users should be able to view and use the website responsively on a mobile, tablet, desktop devices.

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Click to view the Additional Functionality that can be added</summary>

- Emoji Game Route: -

  - Add `Top Score` to the game.
  - Initially, the `Top Score` displayed should be 0.
  - When the game is over, If the user has scored 9 then the `Top Score` should be displayed as 9.
  - This process should be repeated whenever the user score crosses the `Top Score`.
  - Maintain the `Top Score` in local Storage.

- Rock Paper Scissor Route: -

  - In the result view of the game, the winner should be highlighted.

- Memory Matrix Route : - Need to be check

  - Add `Max Level` to the game.
  - Initially, the `Max Level` displayed should be 0.
  - When the game is over, If the user level is 3 then the `Max Level` should be displayed as 3.
  - This process should be repeated whenever the user level is crossed the `Max Level`.
  - Maintain the `Max Level` in local Storage.

- Card Flip Memory Game Route: - Need to be check
  - Add `Lowest Flip Count` to the game.
  - Initially, the `Lowest Flip Count` displayed should be 0.
  - When the game is over, If the user Card Flips count is 50 then the `Lowest Flip Count` should be displayed as 50.
  - This process should be repeated whenever the user card flips are lesser than the `Lowest Flip Count`.
  - Maintain the `Lowest Flip Count` in local Storage.

</details>

### Quick Tips

<details>
<summary>Click to view the list of Quick Tips</summary>

- You can use React Modal third party library to format the date
  - react-modal <a href="https://www.npmjs.com/package/react-modal" target="_blank">Documentation</a>
- You can use RC Progress third party library for showing the progress bar.
  - rc-progress <a href="https://www.npmjs.com/package/rc-progress" target="_blank">Documentation</a>

</details>

### Deployment

- Use the command `ccbp publish RJSCPV4I9G sample.ccbp.tech` to deploy your project.

### Project Submission Instructions

You don`t need to submit this project. This can be done at your own pace.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
