import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Actions from '../components/Actions';
import AlertModal from '../components/AlertModal';
import Header from '../components/Header';
import AlertModalType from '../types/AlertModalType';

const GameStartScreen = ({
    onToBeGuessedChoice,
    range
}: {
    onToBeGuessedChoice: (input: string) => void,
    range: number[]
}) => {
    const [input, setInput] = useState<string>('');
    const min = range[0];
    const max = range[1];

    const toggleModal = () => {
        setAlertModalData(prevState => {
            return ({
                title: "Invalid number",
                content: `You must enter a number between ${min} and ${max}.`,
                visible: !prevState.visible,
                toggle: toggleModal
            });
        });
    }

    const [alertModalData, setAlertModalData] = useState<AlertModalType>({
        toggle: toggleModal
    });

    const resetAction = () => {
        handleInputChange('');
    }

    const confirmAction = () => {
        if (parseInt(input) < min || parseInt(input) > max || input.trim().length < 1) {
            toggleModal();
            return;
        }

        onToBeGuessedChoice(input);
    }

    const handleInputChange = (inputText: string) => {
        setInput(inputText);
    }

    const actions = [
        { title: "Reset", action: resetAction },
        { title: "Confirm", action: confirmAction }
    ];

    return (
        <View style={styles.container}>
            <Header title="Guess My Number"></Header>
            <View style={styles.enterNumber}>
                <Text style={styles.enterNumberLabel}>
                    Enter a Number between {min} and {max}
                </Text>
                <TextInput
                    style={styles.enterNumberInput}
                    keyboardType="number-pad"
                    onChangeText={handleInputChange}
                    value={input}
                    maxLength={max.toString().length}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="off"
                >
                </TextInput>
                <Actions actions={actions}></Actions>
            </View>
            {alertModalData.visible &&
             <AlertModal
                 visible={alertModalData.visible}
                 title={alertModalData.title}
                 content={alertModalData.content}
                 toggle={toggleModal}
             ></AlertModal>}
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 25,
    },
    enterNumber: {
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        width: '100%',
    },
    enterNumberLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    enterNumberInput: {
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: 'white',
        color: 'white',
        fontSize: 35,
        margin: 10,
        textAlign: 'center',
        width: 50,
    },
});

export default GameStartScreen;
