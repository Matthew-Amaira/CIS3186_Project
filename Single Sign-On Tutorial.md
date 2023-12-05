# Building a Single Sign-On (SSO) App in React Native with Expo
  _This page will guide you to implement your very own Single Sign-On (SSO) App in React Native using Expo. This page was constructed for CIS3186: Mobile Device Programming class on 05-Dec-2023_

## Introduction
> **Single Sign-on (SSO) is an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.**

Single Sign-On (SSO) enhances user convenience by allowing seamless access to multiple applications with a single set of credentials, reducing the burden of managing multiple passwords. Secondly, SSO strengthens security through centralized authentication, minimizing the risk of weak passwords and enabling consistent access controls. SSO also improves productivity and cost-efficiency by streamlining logins, reducing support requests related to password issues, and simplifying the onboarding process for new users. Therefore SSO is a powerful solution for organizations aiming to provide a user-friendly experience, fortify security measures, and optimize operational efficiency.

For more information on how SSO works check out this link: https://www.onelogin.com/learn/how-single-sign-on-works

### Prerequisites:
- Installed Node.js and npm
- Visual Studio Code (Optional IDE)
- Basic knowledge of React Native and JavaScript

## Step 1: Set Up a New React Native Project with Expo
> **Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you'd like to try out React Native directly in your web browser before installing any tools, you can try out Snack. (https://snack.expo.dev/)**

**The first step is to create a folder called _Single Sign-On Demonstration_ and open it in _Visual Studio Code_, then copy this code into your IDE's terminal to create a new React-Native app.**
```
npx create-expo-app Single_Sign_On
cd Single_Sign_On
```
## Step 2: Installing dependencies

**Run the following commands in the terminal to install the required dependencies**

````
npx expo install expo-web-browser
````
````
npx expo install expo-auth-session expo-crypto
````

**Next run the following command to prepare the app for running on Android or iOS and copy out the package name (same for android and iOS)**
````
npx expo prebuild
````

## Step 3: Set Up a New Project in the Google Cloud
**This project will use _Sign in with Google_ as an SSO. Now that the React Native App is set up you can set up the Google Cloud environment. First head to: https://console.cloud.google.com/ Create a new project and name it SingleSignOn!**

**Then go to the Navigation Menu and click on APIs and Services**

**Next, Click on Credentials (on the left) and Create Credentials and OAuth client ID**

**You will be asked to configure a consent screen. (Best to use External User type)**

**Click on Create! Name the App SingleSignOnApp, and enter the required data!**

**Click _Save and Continue_ till you get _Back to Dashboard_**

**Try to add OAuth client ID once again. Select Android or iOS Application and insert the package name from Step 1**

**Finally, copy out the client ID for iOS, and paste it as a comment in App.js**

**For android you would need to use the command _expo credentials:manager_**


## Step 4: Modifying App.js
**Import _WebBrowser_ so you will not have to leave the app to sign in**

### App.js
````
//ios      -
//Android  -
//Web      -

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import {AsyncStorage} from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [userInfo, setUSerInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest ({
    // androidClientId: "copyClientID here",
    iosClientId: "copyClientID here",
    // webClientId: "copyClientID here",
  });

  return (
    <View style={styles.container}>
      <Text></Text>
      <Button title="Sign In w/ Google" onPress={promptAsync}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

````

### app.json
````
{
  "expo": {
    "name": "Single_Sign_On",
    "slug": "Single_Sign_On",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": ""
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": ""
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "scheme": "SingleSignOn"
  }
}
````


## Step 5: Trying Out the App :)

**Congratz on making it this far! Finally, simply run the following command to start your app and test it in your emulator.**

````
npx expo start
````

## Conclusion

