import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { StackParamList } from "../App";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type TMealsOverviewScreen = NativeStackScreenProps<
  StackParamList,
  "MealDetail"
>;

export interface ObjectMeal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

const MealDetailScreen: React.FC<TMealsOverviewScreen> = ({
  navigation,
  route,
}) => {
  const { mealId } = route.params;

  const pickedMeal = MEALS.find((item) => item.id === mealId) as Meal;
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  }: ObjectMeal = {
    ...pickedMeal,
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        styleTextProps={styles.detailText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#d35309",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    // margin: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#d35309",
    borderBottomWidth: 2,
  },
});
