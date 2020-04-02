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

const ModalContext = React.createContext({
  visible: false,
  open: () => {},
  close: () => {},
  onPressYes: () => {},
  onPressNo: () => {},
});

export const useDeleteModal = () => {
  return React.useContext(ModalContext);
};

const DeleteModal = () => {
  const context = useDeleteModal();

  return (
    <Modal
      isVisible={context.visible}
      onBackdropPress={context.close}
      onRequestClose={context.close}
    >
      <View style={styles.modal}>
        <Text>
          Do you really want to continue ?
        </Text>
        <View style={styles.buttons}>
          <Text onPress={context.onPressYes} style={styles.button}>Yes</Text>
          <Text onPress={context.onPressNo} style={styles.button}>No</Text>
        </View>
      </View>
    </Modal>
  );
};

export class DeleteModalProvider extends React.Component {
  accept = null;
  reject = null;

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      open: this.open.bind(this),
      close: this.close.bind(this),
      onPressYes: this.onPressYes.bind(this),
      onPressNo: this.onPressNo.bind(this),
    }
  }

  open = () => {
    this.setState({ visible: true });
    return new Promise((accept, reject) => {
      this.accept = accept;
      this.reject = reject;
    })
  };

  close = () => {
    this.accept = null;
    this.reject = null;
    this.setState({
      visible: false
    })
  };

  onPressYes = () => {
    if (this.accept) {
      this.accept(true);
      this.close();
    }
  };

  onPressNo = () => {
    if (this.accept) {
      this.accept(false);
      this.close();
    }
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        { this.props.children }
        <DeleteModal />
      </ModalContext.Provider>
    )
  }
}
