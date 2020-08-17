# HOW TO ADD AUTHENTICATION TO YOUR REACT APP WITH GOOGLE-AUTH2

## Steps to Follow

1. use command npx-create-react-app your_app_name to create a frontend build pipeline.
2. Delete all unnecessary files and add a components folder to the src folder.
3. Create a NavBar component and GoogleAuth component in the components folder.

3) Steps for setting up OAuth2
   - Create a new project at [console.developers.google.com](https://console.developers.google.com)
   - Setup an Oauth confirmation screen
   - Generate an OAuth Client ID.
   - Add a script tag <script src="https://apis.google.com/js/api.js"></script> anywhere inside the <head> of index.html to load the Google APIs platfrom library.
   - Inside the GOogleAuth component, initialize the Google AUth library with the OAuth CLient ID
   - Make sure the lib gets called any time the user clicks on the 'Login with Google' button.

4. Add a link tag : <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"> anywhere inside the <head> to import it via CDN. This is to install semantic ui.

## REFERENCES

- [Google Oauth2](https://developers.google.com/identity/sign-in/web/reference)
- [Semantic UI](https://semantic-ui.com/)
