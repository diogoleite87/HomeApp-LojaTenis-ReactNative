import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Catalog({ data }) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity
      style={styles.contant}
      onPress={() => navigation.navigate("Item", {id: data.id, foto: data.foto, calor: data.valor, nome: data.nome})}
    >
      <Image style={styles.image} source={{ uri: data.foto }} />
      <Text style={styles.itemTitle}>{data.nome}</Text>

      <View style={styles.itemValueDetails}>
        <Text>Valor</Text>
        <Text>Parcel..</Text>
      </View>

      <View style={styles.itemValue}>
        <Text>R$ {data.valor}</Text>
        <Text>em ate 3x</Text>
      </View>
    </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignSelf: "center",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
    paddingEnd: 14,
    paddingStart: 14,
  },
  itemValue: {
    paddingEnd: 0,
    paddingStart: 0,
  },
  itemValueDetails: {
    paddingEnd: 0,
    paddingStart: 0,
  },
});
