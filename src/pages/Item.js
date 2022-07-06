import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 12
  : 54;

export default function Item({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <AntDesign
          name="back"
          size={34}
          color="black"
          backgroundColor="#FAFAFA"
        />
        <Text style={styles.textButton}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.contant}>
        <Image style={styles.image} source={{ uri: route.params?.foto }} />
        <Text style={styles.itemTitle}>{route.params?.nome}</Text>

        <View style={styles.itemValueDetails}>
          <Text>Valor</Text>
          <Text>Parcelamento</Text>
        </View>

        <View style={styles.itemValue}>
          <Text>R$ {route.params?.valor}</Text>
          <Text>em ate 3x</Text>
        </View>
      </View>

      <View>
        <Text>Enviar uma mensagem no Whatsapp!</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonConfirmation}
        >
          <Text style={styles.textButtonCOnfirmation}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginEnd: 14,
    marginStart: 14,
    marginTop: statusBarHeight,
    backgroundColor: "#FAFAFA",
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    fontSize: 90,
  },
  textButton: {
    fontSize: 20,
    backgroundColor: "#FAFAFA",
    fontWeight: "bold",
    marginTop: 5,
    justifyContent: "space-between",
  },
  contant: {
    borderWidth: 10,
    borderBottomWidth: 10,
    backgroundColor: "#DCDCDC",
    borderRadius: 20,
    borderColor: "#DCDCDC",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginTop: 15,
    alignSelf: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  itemValue: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemValueDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonConfirmation: {
    backgroundColor: "#32CD32",
    width: 100,
    borderRadius: 25 / 2,
  },
  textButtonCOnfirmation: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
});
