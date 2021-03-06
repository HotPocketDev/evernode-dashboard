# Evernode Host Dashboard
Evernode host dashboard web app (ReactJS).

## Environment
Add `.env.development.local` file in root directory and specify the dev registry address.
Add `.env.production.local` file in root directory and specify the prod registry address.
```
REACT_APP_REGISTRY_ADDRESS=<Registry address>
```

### URL
Must use "evernode-host-dashboard" sub directory (eg. http://localhost:3000/evernode-host-dashboard). This is controlled in `.env` file.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
