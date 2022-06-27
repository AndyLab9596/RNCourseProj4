import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//  Screen
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";

/**
 * screenOptions: for all pages
 * options: for one specific page
 *
 * if we set the options again when there already have been an option
 * the option in specific page override the screenOptions
 */

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetail: {
    mealId: string;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: {
              //   backgroundColor: "#ddaf94",
              // },
              // headerTintColor: "white",
              // contentStyle: {
              //   backgroundColor: "#a08a7d",
              // },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ navigation, route }) => {
            //   const { categoryId } = route.params;
            //   const category = CATEGORIES.find(
            //     (item) => item.id === categoryId
            //   );

            //   return {
            //     title: category?.title,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
