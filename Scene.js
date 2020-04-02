import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useDeleteModal } from "./DeleteModal";

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
  const deleteModal = useDeleteModal();

  async function showModal() {
    const result = await deleteModal.open();
    if (result) {
      // We want to delete, process
    } else {
      // Nothing to do, the modal closes itself
    }
  }


  return (
    <View style={styles.scene}>
      <TouchableOpacity onPress={showModal}>
        <Text style={styles.text}>Touch to delete the item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scene;
