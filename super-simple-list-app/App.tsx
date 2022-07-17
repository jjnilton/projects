import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './components/Main';

export default function App() {
    return (
        <View style={styles.container}>
            <Main></Main>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
