import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const AlertModal = ({
    title = 'Alert',
    content = 'Something went wrong...',
    visible,
}: {
    title?: string,
    content?: string,
    visible: boolean
}) => {
    const [isModalVisible, setIsModalVisible] = useState(visible);
    const toggleModal = () => {
        setIsModalVisible(prevState => !prevState);
    }

    return (
        <Modal visible={isModalVisible} transparent={true}>
            <View style={styles.alertModalBackdrop}></View>
            <View style={styles.alertModalContainer}>
                <Text style={styles.alertModalTitle}>{title}</Text>
                <Text style={styles.alertModalContent}>{content}</Text>
                <Button title="Ok" onPress={toggleModal}></Button>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    alertModalBackdrop: {
        backgroundColor: 'black',
        flex: 1,
        height: '100%',
        opacity: 0.75,
        position: 'absolute',
        width: '100%',
    },
    alertModalContainer: {
        backgroundColor: "#222",
        borderRadius: 10,
        marginHorizontal: '10%',
        marginVertical: '50%',
        padding: 20,
    },
    alertModalTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    alertModalContent: {
        color: 'white',
        marginVertical: 10,
    }
});

export default AlertModal;
