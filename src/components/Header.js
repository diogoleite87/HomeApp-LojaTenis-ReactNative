import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 12
  : 54;

export default function Header({ name }) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>Bom Dia, {name}!</Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonOption}
          onPress={() => alert("Ainda em teste")}
        >
          <AntDesign name="bars" size={34} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF00",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 18,
    paddingEnd: 18,
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  buttonOption: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
