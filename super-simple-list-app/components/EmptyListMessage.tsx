import { Image, StyleSheet, Text, View } from "react-native";

const EmptyListMessage = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ paddingBottom: 16 }}>
                <Image style={{ width: 100, height: 100 }} source={require('../assets/writing.png')}></Image>
            </View>
            <View>
                <Text style={styles.emptyListMessage}>
                    <Text>Welcome to your List!</Text>
                    {'\n'}
                    <Text>You can <Text style={{fontWeight: 'bold'}}>Add</Text> items from the text field below.</Text>
                </Text>
            </View>
        </View>
    );
}

export default EmptyListMessage;

const styles = StyleSheet.create({
        emptyListMessage: {
        color: 'white',
        textAlign: 'center',
    },
})
