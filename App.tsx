import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//  Screen
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { FavoritesContextProvider } from "./store/context/favorites-context";

/**
 * screenOptions: for all pages
 * options: for one specific page
 *
 * if we set the options again when there already have been an option
 * the option in specific page override the screenOptions
 */

export type StackParamList = {
  DrawerScreen: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetail: {
    mealId: string;
  };
};

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddaf94",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#926952",
        },
        drawerContentStyle: {
          backgroundColor: "#ddaf94",
        },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#d88453",
        drawerActiveTintColor: "#d4540a",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#ddaf94",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#a08a7d",
              },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
