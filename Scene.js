import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import DeleteModal from "./DeleteModal";

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});

const Scene = () => {
  const [visible, setVisible] = React.useState(false);

  function showModal() {
    setVisible(true);
  }
  function hideModal() {
    setVisible(false);
  }

  function deleteContent() {
    // delete the content
    hideModal();
  }

  return (
    <View style={styles.scene}>
        <TouchableOpacity onPress={showModal}>
          <Text style={styles.text}>Touch to delete the item</Text>
        </TouchableOpacity>
        <DeleteModal
          isVisible={visible}
          close={hideModal}
          onPressYes={deleteContent}
          onPressNo={hideModal}
        />
    </View>
  );
};

export default Scene;
