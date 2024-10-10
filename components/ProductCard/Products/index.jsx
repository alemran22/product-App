import ProductCard from "./ProductCard";
import productData from "../../../constant/productData";
import { StyleSheet, View } from "react-native";
const Products = () => {
  return (
    <View style={style.container}>
      {productData.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </View>
  );
};

export default Products;
const style = StyleSheet.create({
  container: { display: "flex", flexDirection: "column", gap: 5 },
});
