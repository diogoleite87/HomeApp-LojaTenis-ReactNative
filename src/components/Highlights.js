import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Highlights({ data }) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <TouchableOpacity
        style={styles.contant}
        onPress={() => navigation.navigate("Item", {id: data.id, foto: data.foto, nome: data.nome, valor: data.valor})}
      >
        <Image style={styles.image} source={{ uri: data.foto }} />
        <Text style={styles.itemTitle}>{data.nome}</Text>

        <View style={styles.itemValueDetails}>
          <Text>Valor</Text>
          <Text>Parcelamento</Text>
        </View>

        <View style={styles.itemValue}>
          <Text>R$ {data.valor}</Text>
          <Text>em ate 3x</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contant: {
    borderWidth: 10,
    borderBottomWidth: 10,
    backgroundColor: "#DCDCDC",
    borderRadius: 20,
    marginLeft: 10,
    borderColor: "#DCDCDC",
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: 15,
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
});
