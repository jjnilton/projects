import { Text, View } from 'react-native';
import styles from '../styles/styles';

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    );
}

export default Header;
