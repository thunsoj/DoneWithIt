import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;

