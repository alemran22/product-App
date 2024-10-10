import Products from "./components/ProductCard/Products";
import ProductCard from "./components/ProductCard/Products";

const { View, Text, StyleSheet, Image } = require("react-native");
const style = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 30,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    borderBottomColor: "#006BF8",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default function Store() {
  return (
    <View>
      {/* // heading */}
      <View>
        <Text style={style.heading}>Product Application</Text>
      </View>
      {/* // card container */}
      <View style={style.container}>
        {/* card 1 */}
        <Products />
      </View>
    </View>
  );
}
