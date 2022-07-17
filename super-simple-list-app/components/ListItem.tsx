import { Button, Text, StyleSheet, View } from "react-native";

const ListItem = ({item, onDeleteItem}: {item: {value: string, id: number}, onDeleteItem: (itemId: number) => void}) => {
    const handleRemoveItem = () => {
        onDeleteItem(item.id);
    }

    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.value}</Text>
            <Button title="DELETE" onPress={handleRemoveItem} color="red"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        padding: 10,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 5,
    },
    listItemText: {
        color: 'white',
        maxWidth: '75%'
    },
})

export default ListItem;
