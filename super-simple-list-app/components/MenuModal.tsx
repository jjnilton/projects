import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const MenuModal = ({isModalVisible, toggleModal}: {isModalVisible: boolean, toggleModal: () => void}) => {
    return (
        <Modal visible={isModalVisible} animationType="slide">
            <View style={styles.modal}>
                <View>
                    <View style={styles.modalText}>
                        <View style={{ marginBottom: 16 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white'}}>About this App</Text>
                        </View>
                        <Text style={{ color: 'white'}}>Etiam tempor, orci eu lobortis elementum? Est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum, faucibus vitae aliquet. Sollicitudin aliquam ultrices sagittis orci, a scelerisque purus! Elementum, nibh tellus molestie nunc, non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis. Iaculis urna, id volutpat lacus laoreet non curabitur gravida? Vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices? Platea dictumst quisque sagittis, purus sit amet volutpat consequat, mauris nunc congue nisi, vitae suscipit tellus?</Text>
                    </View>
                </View>
                <View style={{ padding: 10}}>
                    <Button title="CLOSE" onPress={toggleModal}></Button>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'space-between'
    },
    modalText: {
        padding: 24,
        alignItems: 'center',
    },
});

export default MenuModal;
