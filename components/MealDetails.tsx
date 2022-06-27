import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { ObjectMeal } from "../screens/MealDetailScreen";

interface IMeatDetails extends Partial<ObjectMeal> {
  styleViewProps?: { [x: string]: any };
  styleTextProps?: { [x: string]: any };
}

const MealDetails: React.FC<IMeatDetails> = ({
  duration,
  complexity,
  affordability,
  styleViewProps,
  styleTextProps,
}) => {
  return (
    <View style={[styles.details, styleViewProps]}>
      <Text style={[styles.detailItem, styleTextProps]}>{duration}m</Text>
      <Text style={[styles.detailItem, styleTextProps]}>{complexity}</Text>
      <Text style={[styles.detailItem, styleTextProps]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
});
