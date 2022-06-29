import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: () => void;
  iconProps?: keyof typeof Ionicons.glyphMap;
  colorProps?: string;
}

const IconButton = ({
  onPress,
  iconProps = "star",
  colorProps = "white",
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={iconProps} size={24} color={colorProps} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
