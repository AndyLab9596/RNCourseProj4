import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { StackParamList } from "../App";
import MealDetails from "./MealDetails";

interface IMealItem {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress: () => void;
}

const MealItem: React.FC<IMealItem> = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const onPressVersion2 = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        // onPress={onPress}
        onPress={onPressVersion2}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
