import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
  } from "react-native";
  import { useState } from "react";
  
  function ShoppingInput(props: {
    onAddItem: (result: string) => void;
    visible: boolean;
    onCancel: () => void;
  }) {
    const [enteredShoppingItem, setEnteredShoppingItem] = useState("");
  
    const shoppingInputHandler = (enteredItem: string) => {
      setEnteredShoppingItem(enteredItem);
    };
  
    const addItemHandler = () => {
      props.onAddItem(enteredShoppingItem);
      setEnteredShoppingItem("");
    };
  
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/shoppingcart.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your shopping item !"
            placeholderTextColor="gray"
            onChangeText={shoppingInputHandler}
            value={enteredShoppingItem}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={props.onCancel}
                color="#e60000"
              ></Button>
            </View>
            <View style={styles.button}>
              <Button
                title="Add"
                onPress={addItemHandler}
                color="#00b33c"
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  
  export default ShoppingInput;
  
  const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      alignItems: "center",
      padding: 16,
      backgroundColor: "black",
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 80,
      tintColor: "white",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "black",
      color: "white",
      borderRadius: 6,
      width: "100%",
      padding: 16,
      marginTop: 80,
    },
    buttonContainer: {
      marginTop: 30,
      flexDirection: "row",
    },
    button: {
      width: 75,
      marginHorizontal: 10,
    },
  });
  