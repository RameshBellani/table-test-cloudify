# My Table App

This is a React application that allows users to interact with a table featuring single select and multi-select dropdowns. The table can be dynamically updated by adding new rows, and the content can be exported to a PDF file.

## Prerequisites

Before running this project, you need to have the following installed on your machine:

- **Node.js**: You can download and install it from [https://nodejs.org/](https://nodejs.org/).
- **npm**: The Node package manager comes installed with Node.js.

## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/my-table-app.git

Install Dependencies
Navigate to the project folder and install the necessary dependencies using npm:
cd my-table-app
npm install


This will install all the required dependencies specified in package.json.

3. Running the Development Server
Once the dependencies are installed, you can run the app in development mode:

npm start

This will start the React development server, and you should see the following message in your terminal:
Compiled successfully!

You can now view my-table-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://<your-ip>:3000

Open http://localhost:3000 in your browser to see the app in action. The page will reload if you make edits, and you can also view any lint errors in the console.

4. Exporting the Table to PDF
Click the Export Table button in the top-right corner of the app's navigation bar to download the table as a PDF. The table will be exported in its current form, and you will be prompted to save the file to your local system.

5. Testing the App
To run the tests for this app (if any), use the following command

npm test

This will launch the test runner in watch mode and display any test results in the terminal. The app uses Jest for testing.

6. Building the App for Production
When you're ready to deploy the app, you can create an optimized production build using the following command

npm run build

This command will create a build folder with the optimized production version of your app. You can then deploy this folder to your server or hosting provider.

7. Ejecting the Project (Optional)
If you need full control over the build configuration (e.g., Webpack, Babel, ESLint), you can "eject" the project. Note: This is a one-way operation, and you cannot undo it once it's done

npm run eject
