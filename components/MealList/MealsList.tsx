import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import { FavoritesContext } from "../../store/context/favorites-context";
import MealItem from "./MealItem";
import { StyleSheet } from "react-native";

const MealsList = ({}) => {
  const { favoriteMealIds } = useContext(FavoritesContext);
  const displayMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    const pressHandler = () => {};

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

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
