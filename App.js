/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   Button,
   Modal,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 
 import CodePush from "react-native-code-push";
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const [upgradeState, setUpgradeState] = React.useState(0);
   const [upgradeReceived, setUpgradeReceived] = React.useState(0);
   const [upgradeAllBytes, setUpgradeAllBytes] = React.useState(0);
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   React.useEffect(() => {
     checkUpdate();
   }, []);
 
   function checkUpdate() {
    CodePush.notifyAppReady()
    // this.syncImmediate()
    CodePush.sync({
        updateDialog: {
            optionalIgnoreButtonLabel: '稍后',
            optionalInstallButtonLabel: '后台更新',
            optionalUpdateMessage: '智店通有新版本了，是否更新？',
            title: '更新提示'
        },
        installMode: CodePush.InstallMode.ON_NEXT_RESTART
    });
   }
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <Text style={styles.tip}>发现新版本111111332</Text>
         <Button title="检查11" onPress={checkUpdate} />
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   modal: {
     padding: 25,
     backgroundColor: 'rgba(10,10,10,0.6)',
     height: '100%',
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
   },
   content: {
     backgroundColor: '#fff',
     width: '100%',
     padding: 18,
   },
   tip: {
     paddingBottom: 20,
     textAlign: 'center',
     fontSize: 22,
   },
   des: {
     paddingBottom: 20,
   },
 });
 
 export default App; 
 