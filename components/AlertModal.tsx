import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import AlertModalType from '../types/AlertModalType';

const AlertModal = ({
    title = 'Alert',
    content = 'Something went wrong...',
    visible = false,
    toggle,
}: AlertModalType
) => {

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.alertModalBackdrop}></View>
            <View style={styles.alertModalContainer}>
                <Text style={styles.alertModalTitle}>{title}</Text>
                <Text style={styles.alertModalContent}>{content}</Text>
                <Button title="Ok" onPress={toggle}></Button>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    alertModalBackdrop: {
        backgroundColor: 'white',
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
