import { Button, StyleSheet, View } from 'react-native';

const MenuButton = ({toggleModal}: {toggleModal: () => void}) => {
    return (
        <View style={styles.menu}>
            <Button title="ABOUT" onPress={toggleModal}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        alignItems: 'baseline',
        padding: 8
    },
})

export default MenuButton;
