react-native bundle --entry-file index.js --bundle-output ./bundle/android/index.android.bundle --platform android --assets-dest ./bundle/android --dev false


code-push release CodePushDemoAndroid ./bundle/android/  1.0 --deploymentName Production --description "修复BUG" --mandatory false