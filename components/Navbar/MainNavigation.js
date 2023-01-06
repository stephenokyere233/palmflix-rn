import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MovieDetails from "../../screens/MovieDetails";
import Home from "../../screens/Home";
import Search from "../../screens/search";
import Trending from "../../screens/trending";
import TVShows from "../../screens/TVShows";
import TopRated from "../../screens/TopRated";

const homeName = "Home";
const searchName = "Search";
const trendingName = "Trending";
const topRatedName = "Top Rated";
const tvShowsName = "TV Shows";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Discover Movies"
      options={{ headerShown: false }}
      component={Home}
    />
    <Stack.Screen
      name="Movie Details"
      options={{ headerShown: false }}
      component={MovieDetails}
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search Results"
      options={{ headerShown: false }}
      component={Search}
    />
    <Stack.Screen
      name="Movie Details"
      options={{ headerShown: false }}
      component={MovieDetails}
    />
  </Stack.Navigator>
);

const TrendingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Trending Movies"
      options={{ headerShown: false }}
      component={Trending}
    />
    <Stack.Screen
      name="Movie Details"
      options={{ headerShown: false }}
      component={MovieDetails}
    />
  </Stack.Navigator>
);

const TVStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TV Shows And Series"
      options={{ headerShown: false }}
      component={TVShows}
    />
    <Stack.Screen
      name="Movie Details"
      options={{ headerShown: false }}
      component={MovieDetails}
    />
  </Stack.Navigator>
);
const TopStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Top Rated Movies"
      options={{ headerShown: false }}
      component={TopRated}
    />
    <Stack.Screen
      name="Movie Details"
      options={{ headerShown: false }}
      component={MovieDetails}
    />
  </Stack.Navigator>
);

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "black",
          },
        }}
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingHorizontal: 6,
            paddingBottom: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 10,
            height: 70,
            backgroundColor: "#101029",
          },
          tabBarActiveTintColor: "blueviolet",
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              return (
                <Feather
                  name="home"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  className="mx-4"
                />
              );
            } else if (rn === searchName) {
              return (
                <FontAwesome
                  name="search"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  className="mx-4"
                />
              );
            } else if (rn === trendingName) {
              return (
                <FontAwesome5
                  name="fire"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  className="mx-4"
                />
              );
            } else if (rn === topRatedName) {
              return (
                <Feather
                  name="tv"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  className="mx-4"
                />
              );
            } else if (rn === tvShowsName) {
              return (
                <MaterialIcons
                  name="movie"
                  size={30}
                  color={focused ? "blueviolet" : "white"}
                  className="mx-4"
                />
              );
            }
          },
          tabBar: () => {
            return {
              activeTintColor: "blueviolet",
              inactiveTintColor: "grey",
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 100 },
            };
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#101029",
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
          component={HomeStack}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={searchName}
          component={SearchStack}
        />
        <Tab.Screen
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#101029",
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
          name={trendingName}
          component={TrendingStack}
        />
        <Tab.Screen
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#101029",
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
          name={tvShowsName}
          component={TVStack}
        />
        <Tab.Screen
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#101029",
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
          name={topRatedName}
          component={TopStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
