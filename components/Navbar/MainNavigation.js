import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

// Screens
import Home from "../../screens/Home";
import Search from "../../screens/search";
import Trending from "../../screens/trending";
import TVShows from "../../screens/TVShows";
import TopRated from "../../screens/TopRated";
import TitleBar from "./TitleBar";

//Screen names
const homeName = "Discover";
const searchName = "Search";
const trendingName = "Trending";
const topRatedName = "Top Rated";
const tvShowsName = "TV Shows";

const Tab = createBottomTabNavigator();

// tabBar={()=>({
//   activeTintColor: "blueviolet",
//   inactiveTintColor: "grey",
//   labelStyle: { paddingBottom: 10, fontSize: 10 },
//   style: { padding: 10, height: 70, background: "black" },
// })}

function MainContainer() {
  return (
    <NavigationContainer>
      {/* <TitleBar /> */}
      <Tab.Navigator
        //   style={tw`items-center flex justify-center`}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingHorizontal: 6,
            paddingBottom: 10,
            // borderWidth:0,
            // flex:1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 10,
            // lineHeight:0,
            height: 70,
            backgroundColor: "#101029",
            // activeTintColor: "blueviolet",
          },
          tabBarLabelStyle:{},
          tabBarActiveTintColor: "blueviolet",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              return (
                <Feather
                  name="home"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  style={tw`mx-4`}
                />
              );
            } else if (rn === searchName) {
              return (
                <FontAwesome
                  name="search"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  style={tw`mx-4`}
                />
              );
            } else if (rn === trendingName) {
              return (
                <FontAwesome5
                  name="fire"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  style={tw`mx-4`}
                />
              );
            } else if (rn === topRatedName) {
              return (
                <Feather
                  name="tv"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  style={tw`mx-4`}
                />
              );
            } else if (rn === tvShowsName) {
              return (
                <MaterialIcons
                  name="movie"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  style={tw`mx-4`}
                />
              );
            }
          },
          tabBar: () => {
            return {
              activeTintColor: "blueviolet",
              inactiveTintColor: "grey",
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 100, background: "black" },
            };
          },
        })}
        // tabBar:()=>{{
        //   activeTintColor: "tomato",
        //   inactiveTintColor: "grey",
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70 },
        // }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={searchName} component={Search} />
        <Tab.Screen name={trendingName} component={Trending} />
        <Tab.Screen name={tvShowsName} component={TVShows} />
        <Tab.Screen name={topRatedName} component={TopRated} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
