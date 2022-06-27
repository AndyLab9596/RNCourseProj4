import { Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NavigationProp } from '@react-navigation/native';
import { StackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// interface ICategoriesScreen {
//     navigation: NavigationProp<StackParamList, 'MealsCategories'>
// }

type TICategoriesScreen = NativeStackScreenProps<StackParamList, 'MealsCategories'>

const CategoriesScreen: React.FC<TICategoriesScreen> = ({ navigation }) => {

    const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,

            })
        }

        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(itemData) => itemData.id}
            // renderItem={(itemData) => renderCategoryItem(itemData)}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;