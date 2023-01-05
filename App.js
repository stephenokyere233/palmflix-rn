import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet } from "react-native";
import MainNav from "./components/Navbar/MainNav";
import TitleBar from "./components/Navbar/TitleBar";
import Hero from "./components/Hero/Hero";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Search from "./screens/search";
import Trending from "./screens/trending";
import TVShows from "./screens/TVShows";
import TopRated from "./screens/TopRated";
import MainContainer from "./components/Navbar/MainNavigation";
import { AppProvider } from "./context/context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <AppProvider>
        <MainContainer />
      </AppProvider>
      {/* <StatusBar hidden={true} barStyle="light-content" /> */}
    </>
  );
};

// <NavigationContainer>
//   <SafeAreaView style={tw`flex flex-1`}>
//     <StatusBar hidden={true} barStyle="light-content" />
//     <TitleBar />
//     <Stack.Navigator>
//       <Stack.Screen name="Discover" component={Home} />
//       <Stack.Screen name="Search" component={Search} />
//       <Stack.Screen name="Trending" component={Trending} />
//       <Stack.Screen name="TV Shows" component={TVShows} />
//       <Stack.Screen name="Top Rated" component={TopRated} />
//     </Stack.Navigator>
//     <MainNav />
//   </SafeAreaView>
// </NavigationContainer>

const styles = StyleSheet.create({
  contentContainer: {
    height: "calc(100%-160px)",
    overflow: "scroll",
    borderWidth: 2,
    borderColor: "black",
    flex: 1,
  },
  container: {
    // flex:1,
    flexDirection: "column",
  },
});

export default App;
