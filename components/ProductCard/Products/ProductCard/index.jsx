import { View, Text, StyleSheet, Image, Button } from "react-native";

const ProductCard = ({ id, img, title, description, price }) => {
  return (
    <View style={style.card}>
      {/* left */}
      <View style={style.leftContent}>
        <Image style={style.image} source={{ uri: img }} />
        <View style={style.content}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.description}>{description}</Text>
        </View>
      </View>
      {/* right */}
      <View>
        <Text style={style.price}>{price}</Text>
        <Button title="BUY" color={"#006BF8"} />
      </View>
    </View>
  );
};

export default ProductCard;
const style = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  card: {
    paddingHorizontal: 10,
    // borderColor: "orange",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    padding: 8,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  description: { fontSize: 12 },
  price: { color: "blue", fontSize: 20, fontWeight: "bold" },
  content: { marginLeft: 10 },
  leftContent: { width: "70%", display: "flex", flexDirection: "row" },
  rightContent: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: { height: 60, width: 60 },
});
