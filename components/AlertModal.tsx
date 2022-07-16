import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import styles from '../styles/styles';

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

export default AlertModal;
