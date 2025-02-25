This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


gesture	In React Native, a gesture refers to any user interaction involving touch, such as tapping, swiping, pinching, or dragging. Gestures allow users to interact with mobile applications naturally.
	
Type of gesture	"a) Using Built-in Gesture Handlers
onPress (for taps) → Used in components like TouchableOpacity, TouchableHighlight
onLongPress (for long press) → Also available in Touchable components
onPanResponder (for complex gestures) → Uses the PanResponder API for handling drag/move gestures

b)Using react-native-gesture-handler (Recommended)
The react-native-gesture-handler library provides more performant and customizable gesture handling."
	
	"b)Using react-native-gesture-handler (Recommended)
 i)What is a Pan Gesture in React Native?
A Pan Gesture allows users to drag an element across the screen. This is useful for draggable components, sliders, and swipe interactions.
React Native provides two ways to handle pan gestures:
Using PanResponder (Built-in API)
🔥 Key Points
✅ Uses Animated.ValueXY() to track position
✅ onPanResponderMove updates X & Y values
✅ onPanResponderRelease resets the position smoothly
Using PanGestureHandler from react-native-gesture-handler (Recommended)
🔥 Key Points
✅ Uses Reanimated for smooth animations
✅ useSharedValue stores X & Y positions
✅ useAnimatedStyle updates the position dynamically


ii)Tap gesture — single and double tap
Tap gestures are used to detect user interactions like a single tap (click) or double tap (quick two clicks). 
React Native does not provide built-in double tap detection, but we can implement it manually using Date.now() or use react-native-gesture-handler.
🚀 1️⃣ Single Tap (Using Pressable)
🔥 How It Works
✅ Uses Pressable instead of TapGestureHandler
✅ Detects single tap (onPress)
✅ Changes color on tap

🚀 2️⃣ Double Tap (Using TouchableWithoutFeedback)
🔥 How It Works
✅ Uses TouchableWithoutFeedback instead of TapGestureHandler
✅ Manually detects double tap using Date.now()
✅ Animated.spring() smoothly scales the box


"
	"iii)Swipeable Gesture in React Native
Swipe gestures are commonly used for deleting items, revealing hidden options, and custom UI interactions (like swiping cards).

 How This Works?
Swipeable Component

Allows swiping gestures.
Uses renderLeftActions and renderRightActions to handle swipe left (delete) and swipe right (archive).
Left Swipe (Delete)

Shows a red background with ""Delete"" text.
Right Swipe (Archive)

Shows a green background with ""Archive"" text.
Animation Effect

Uses interpolation for smooth scaling of the action text."