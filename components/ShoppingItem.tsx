import { StyleSheet, View, Text, Pressable } from "react-native";

function ShoppingItem(
  this: any,
  props: {
    text: string;
    id: string;
    onDeleteItem: (id: string) => void;
  }
) {
  return (
    <View style={styles.shoppingItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default ShoppingItem;

const styles = StyleSheet.create({
  shoppingItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
  },
  itemText: {
    color: "white",
    padding: 8,
  },
});
