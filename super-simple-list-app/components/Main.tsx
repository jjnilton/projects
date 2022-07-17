import React from "react";
import { Button, StatusBar, StyleSheet, TextInput, View } from "react-native";
import EmptyListMessage from "./EmptyListMessage";
import List from "./List";
import MenuButton from "./MenuButton";
import MenuModal from "./MenuModal";

const Main = () => {
    const [list, setList] = React.useState<string[]>([]);
    const [itemInputValue, setItemInputValue] = React.useState<string>('');
    const [modalIsVisible, setModalIsVisible] = React.useState<boolean>(false);

    const changeInputHandler = (textValue: string): void => {
        setItemInputValue(textValue);
    }

    const addToListHandler = (): void => {
        if (itemInputValue) {
            setList(prevState => {
                return [...prevState, itemInputValue];
            });
            setItemInputValue('');
        }
    }

    const deleteFromListHandler = (itemId: number): void => {
        setList(prevState => {
            return prevState.filter((_, index) => index !== itemId);
        })

    }

    const toggleMenuModal = (): void => {
        setModalIsVisible(prevState => !prevState);
    }

    return (
        <>
            <StatusBar></StatusBar>
            <MenuModal isModalVisible={modalIsVisible} toggleModal={toggleMenuModal}></MenuModal>
            <MenuButton toggleModal={toggleMenuModal}></MenuButton>
            {list.length < 1 && <EmptyListMessage></EmptyListMessage>}
            <List list={list} onDeleteItem={deleteFromListHandler}></List>
            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the list item..."
                    onSubmitEditing={addToListHandler}
                    onChangeText={changeInputHandler}
                    value={itemInputValue}
                ></TextInput>
                <View style={{ width: '30%', justifyContent: 'center' }}>
                    <Button title="ADD" onPress={addToListHandler}></Button>
                </View>
            </View>
        </>
    );
}

export default Main;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: 'white',
        marginRight: 5,
        padding: 5,
        flex: 1,
    },
        footer: {
        backgroundColor: 'black',
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        },
});
