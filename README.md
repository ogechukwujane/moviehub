# ONEWAY

This project was crafted using

- React Native cli, and
- Typescript

## Installation:

To get the app running on your emulator, firstly

- Clone the repository and navigate into the project directory,

  ```
  cd project-directory-name
  ```

- Run npm to install all dependency used,

  ```
  npm install
  ```

- For MacBook users, Run the code below to install all dependency used on ios,

  ```
  cd ios
  pod install
  cd ..
  ```

- To get the app running on your emulator, run any of the command below to open on ios emulator or an android emulator.

  ```
  npm run start or
  ```

  ```
  npx react-native run-android
  ```

  ```
  npx react-native run-ios
  ```

The app is up and running.

## Folder Structure:

All the working file of this app can be found in the `src` folder.

- The `assets(folder)` which consist of Icon(file) and image(file), It can be found outside the `src(folder)`.

- The `component(folder)` which consist of all reusable component used around the app.

- The `navigation(folder)` which consist of the routing setup.

- The `screens(folder)` which consist of all the screens of the app.

- The `store(folder)` which contains all the api configurations and setup.

- The `utils(folder)` which contains all reusable functions used on the app.
