import { View, StyleSheet, FlatList, Text, ScrollView, SafeAreaView } from "react-native";
import Catalog from "../components/Catalog";
import Header from "../components/Header";
import Highlights from "../components/Highlights";

const itens = [
  {
    id: "1",
    nome: "Nike Air Jordan 1",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994239754323361802/unknown.png",
    valor: "1090,90",
  },
  {
    id: "2",
    nome: "Adidas SuperStar",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994240220360876134/unknown.png",
    valor: "499,90",
  },
  {
    id: "3",
    nome: "Puma Mirage Sport",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994241028011855922/unknown.png",
    valor: "499,90",
  },
  {
    id: "4",
    nome: "Nike Pegasus Fem",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994241527746412564/unknown.png",
    valor: "799,90",
  },
  {
    id: "5",
    nome: "Nike Run Flyknit 2",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994243240083587092/unknown.png",
    valor: "599,90",
  },
  {
    id: "6",
    nome: "The North Face",
    foto: "https://cdn.discordapp.com/attachments/994238814040113244/994243597572526201/unknown.png",
    valor: "1299,90",
  },
  // {
  //   id: "7",
  //   nome: "Oakley Mod Nomad",
  //   foto: "https://cdn.discordapp.com/attachments/994238814040113244/994244354661163168/unknown.png",
  //   valor: "549,90",
  // },
];

export default function Home() {

  return (

    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header name="Diogo" />

      <Text style={styles.title}>Destaques</Text>
      <View>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={itens}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Highlights data={item} />}
        />
      </View>

      <Text style={styles.title}>Mais opções disponiveis</Text>
      <View>
      <FlatList
          style={styles.list}
          data={itens}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Catalog data={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    marginEnd: 14,
    marginStart: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
});
