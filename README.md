# Expo Linking.addEventListener Issue on Android

This repository demonstrates a bug where `Linking.addEventListener` in Expo fails to trigger when a deep link is opened from another application on Android.  The URL scheme is correctly set up, yet the event listener remains inactive.

## Problem

The `Linking.addEventListener` method within Expo's `Linking` API does not fire the callback function when an app is launched via a deep link from an external source (e.g., another app) on Android. This issue is not consistent across all platforms; it seems to be specific to Android.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Try opening a deep link intended for this app from a different application.  Observe that the `Linking.addEventListener` listener does not execute.

## Solution

A potential workaround involves checking for initial URL on app load using `Linking.getInitialURL` and reacting to that, in addition to the event listener. This isn't an ideal solution as it requires duplicate code but is a workable alternative to a broken event listener.