import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Modal from "react-native-modal";

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  button: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
    marginLeft: 5,
  }
});

const DeleteModal = () => {
  return (
    <Modal
      isVisible={this.props.visible}
      onBackdropPress={this.props.close}
      onRequestClose={this.props.close}
    >
      <View style={styles.modal}>
        <Text>
          Do you really want to continue ?
        </Text>
        <View style={styles.buttons}>
          <Text onPress={this.props.onPressYes} style={styles.button}>Yes</Text>
          <Text onPress={this.props.onPressNo} style={styles.button}>No</Text>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
