import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import Web3Auth, { OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";

const web3auth = new Web3Auth(WebBrowser, SecureStore, {
  clientId: process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID!,
  network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // or other networks
  useCoreKitKey: false,
});
export default function App() {
  const clientID = process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID;
  console.log(clientID);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>client ID: {clientID}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
