import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    backgroundColor: colors.white,
  },
  containerInput: {
    marginVertical: 15
  },
  input: {
    height: 50,
    padding: 10,
    borderRadius: 4,
    borderBottomWidth: 1,
    backgroundColor: colors.secondaryColor,
    borderBottomColor: colors.blue
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10
  }
});