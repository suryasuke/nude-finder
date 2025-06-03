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



DESCRIPTION
-----------This web application is built using React.js and JavaScript and is designed to automatically detect nudity in images and blur it instantly, providing a content-safe experience in real time. It utilizes a powerful machine learning model to identify inappropriate content and acts immediately to obscure it — ensuring users can browse or upload images safely.

### 🛠️ Technologies Used:
Frontend Framework: React.js
React enables fast and interactive user interfaces with a responsive experience.

Programming Language: JavaScript
The core logic, event handling, and API calls are managed using vanilla JavaScript alongside React.

Package Used for Nudity Detection:
nsfwjs
A JavaScript library powered by TensorFlow.js that uses a pre-trained model to classify images into categories like neutral, porn, sexy, hentai, and drawings.

### ⚙️ How It Works:
Image Upload or Preview
Users upload or preview an image on the platform.

### NSFWJS Model Loads
The app loads the NSFWJS model asynchronously using TensorFlow.js.

### Image Classification
Once the model is loaded, the uploaded image is analyzed in the browser to determine if it contains nudity or adult content.

### Real-Time Detection
If any category crosses a defined threshold (e.g., porn or sexy > 0.7 confidence), the image is classified as inappropriate.

### Blurring Mechanism
A CSS blur effect (or canvas-based masking) is applied instantly to the detected image to hide nudity.

### Result Display
The user is either warned or shown a blurred image based on the detection result, with a toggle for authorized users (if needed).

### 🔐 Key Features:

### 🔍 Client-side Detection:
No image is sent to a server. Detection happens locally in the browser, enhancing privacy and speed.

### 
🚫Automatic Censorship: Inappropriate content is blurred automatically without user intervention.

### 
⚡Real-Time Results: The TensorFlow.js model operates without page reloads, making the app feel smooth and fast.

### 
🧩 Pluggable Logic: The detection threshold or categories can be customized for different platform needs (e.g., parental control, forums, image moderation).

### ✅ Use Cases:
Social media image moderation

Educational platforms to avoid exposure to NSFW content

Parental control tools

Chat/image-sharing applications

Privacy-first content safety for browser extensions


