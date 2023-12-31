# Budget Allocation App

## Description

This project uses React to display a webpage to plan for budgeting expenses for various departments. 
- Can change currency using selector (will update in all areas of webpage) where it is displayed.
- Can update the budget (hardcoded to 20,000 upper limit). Budget is used to set upper limits to how much each item can be incremented, alerts will pop-up indicating user when things go passed limit.
- The 'Remaining' and 'Spent so far' fields dynamically updated as items are added/removed and as budget is adjusted.
- Can increase or decrease department allocations or do it in lump sum.

![image](https://github.com/MaayonThayaparan/BudgetAllocationApp-React/assets/43158629/1a54ba95-f8f4-40ac-98c4-869dd242ee28)

## Getting Started

### Dependencies
- Tested on Windows 10
- Used NPM to install packages required to run server. Download at: https://nodejs.org/en/download
- Tested on Node.js version v18.16.0

### Installation
- Download Node.JS and NPM: https://nodejs.org/en/download
- Download project from GitHub
- Open a new terminal
- Ensure you are in the project folder
- Run the following command to install all the packages that are required for running the server (without start and end quotes):
  "npm install --s"

### Executing the Program
- Open a new terminal
- Ensure you are in the project folder
- Start the server using the below command in the terminal (without start and end quotes):
  "npm start"
- This will launch the website. You can do the following:
     - Change the currency in the 'Currency' selector. This will update the currency symbol across the webpage.
     - You can increase/decrease each department by 10 using the '+' or '-' buttons or clear it completly using the 'X' button.
          - This will dynamically change the 'Allocated Budget', 'Remaining' and 'Spent so far' fields.
     - You can change a department via lump sum in the 'Change allocation' section. Choose the department, choose to add/remove, and input a number and hit 'Save'.
          - This will dynamically change the 'Allocated Budget', 'Remaining' and 'Spent so far' fields.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
