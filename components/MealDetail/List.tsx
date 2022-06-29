import { View, StyleSheet, Text } from "react-native";
import React, { Fragment } from "react";

interface IList {
  arrayList: string[];
}

const List = ({ arrayList }: IList) => {
  return (
    <>
      {arrayList.map((item) => {
        return (
          <View key={item} style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        );
      })}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#d35309",
  },
  itemText: {
    color: "#ddaf94",
    textAlign: "center",
  },
});
