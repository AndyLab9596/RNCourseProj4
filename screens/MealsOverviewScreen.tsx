import React from 'react';

import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';


type TMealsOverviewScreen = NativeStackScreenProps<StackParamList, 'MealsOverview'>;

const MealsOverviewScreen: React.FC<TMealsOverviewScreen> = ({ navigation, route }) => {
    const { categoryId } = route.params;
    // alternative option
    // const routeFromUseRoute = useRoute();

    const displayMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

    const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
        return (
            <MealItem title={itemData.item.title} />
        )
    }

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {categoryId} </Text>
            <FlatList
                data={displayMeals}
                keyExtractor={(itemData) => itemData.id}
                renderItem={renderMealItem}
            />

        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})