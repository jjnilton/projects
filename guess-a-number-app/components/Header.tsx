import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        borderWidth: 2,
        borderColor: 'white',
        margin: 15,
        padding: 10,
        textAlign: 'center',
        width: '50%',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Header;
