import React, { useEffect, useLayoutEffect } from "react";

import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";

type TMealsOverviewScreen = NativeStackScreenProps<
  StackParamList,
  "MealsOverview"
>;

const MealsOverviewScreen: React.FC<TMealsOverviewScreen> = ({
  navigation,
  route,
}) => {
  const { categoryId } = route.params;
  // alternative option
  // const routeFromUseRoute = useRoute();

  const displayMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      });
    };

    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={pressHandler}
      />
    );
  };

  useLayoutEffect(() => {
    // setting option is a side-effect
    navigation.setOptions({
      title: CATEGORIES.find((item) => item.id === categoryId)?.title,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId} </Text>
      <FlatList
        data={displayMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
