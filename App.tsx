import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ShoppingInput from "./components/ShoppingInput";
import ShoppingItem from "./components/ShoppingItem";

type ShoppingItem = {
  text: string;
  id: string;
};

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

  const startAddShoppingItemHandler = () => {
    setModalIsVisible(true);
  };

  const endAddShoppingItemHandler = () => {
    setModalIsVisible(false);
  };

  const addShoppingItemHandler = (enteredShoppingItem: string) => {
    setShoppingList((currentShoppingList) => [
      ...currentShoppingList,
      { text: enteredShoppingItem, id: Math.random().toString() },
    ]);
    endAddShoppingItemHandler();
  };

  const deleteShoppingItemHandler = (id: string) => {
    setShoppingList((currentShoppingList) => {
      return currentShoppingList.filter(
        (shoppingItem) => shoppingItem.id !== id
      );
    });
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add Shopping Item"
          color="rgba(0, 153, 255, 0.7)"
          onPress={startAddShoppingItemHandler}
        />
        <ShoppingInput
          onAddItem={addShoppingItemHandler}
          visible={modalIsVisible}
          onCancel={endAddShoppingItemHandler}
        />
        <View style={styles.shoppingListContainer}>
          <FlatList
            data={shoppingList}
            renderItem={(itemData) => {
              return (
                <ShoppingItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteShoppingItemHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceHorizontal={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
    backgroundColor: "black",
  },

  shoppingListContainer: {
    flex: 5,
    marginTop: 20,
  },
});
