import React, { ReactText } from "react";
import { Text, View, StyleSheet } from "react-native";

interface ISubtitle {
  children: ReactText;
}

const Subtitle: React.FC<ISubtitle> = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#d35309",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    // margin: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#d35309",
    borderBottomWidth: 2,
  },
});
