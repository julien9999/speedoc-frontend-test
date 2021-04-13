## How to start the application

1. clone the repo
2. install node_modules using `yarn` in terminal
3. connect your computer with the phone or open the emulator
4. run command `yarn android` for install the application with debug env for android

## How to create production build

1. install node_modules using `npm` or `yarn` in terminal
2. for Android. run command `npm android:prod` or `yarn android:prod` in terminal
3. the apk will be in folder `android/build/outputs/apk/release/` with name `app-release.apk`

## Run in mac

### Android

1. clone the repo
2. install node_modules using `yarn`
3. run command `yarn run permission-android`
4. run command `yarn run clean-android`
5. run command `yarn run android`
