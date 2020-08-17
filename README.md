# HOW TO ADD AUTHENTICATION TO YOUR REACT APP WITH GOOGLE-AUTH2

---

## Steps to Follow

1. use command npx-create-react-app to create a frontend build pipeline.
2. Delete all unnecessary files and add a components folder to the src folder.

3) Steps for setting up OAuth
   - Create a new project at console.developers.google.com
     4)Setup an Oauth confirmation screen
4) Generate an OAuth Client ID.
   Install Google's API library, initialize it with the OAuth CLient ID
5) Make sure the lib gets called any time the suer clicks on the 'Login with Google' button.

3. Open index.html in the public folder.

4) Add <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"> anywhere inside the <head> to import it via CDN. This is to install semantic ui.
5) Add <script src="https://apis.google.com/js/api.js"></script> anywhere inside the <head>. This is for

3. Open App.js and delete the code inside and replace it with the one as shown in the file.
4. Create NavBar.js and GoogleAuth.js in components folder.

In the project directory, you can run:

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
