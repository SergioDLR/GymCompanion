import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34B6FA",
  },
  Container2: {
    flex: 1,
    backgroundColor: "#34B6FA",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    width: 250,
    backgroundColor: "#FFF",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 23,
  },
  button2: {
    width: 250,
    backgroundColor: "#fff",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 18,
    color: "#000",
    paddingTop: 1,
    paddingBottom: 1,
  },
});

export default styles;
