import { Button, View } from 'react-native';
import styles from '../styles/styles';
import Action from '../types/Action';

const Actions = ({ actions }: { actions: Action[] }) => {
    return (
        <View style={styles.actions}>
            {actions.map(action => {
                return (
                    <View key={action.title} style={styles.actionButton}>
                        <Button
                            title={action.title}
                            onPress={action.action}>
                        </Button>
                    </View>)}
            )}
        </View>
    );
}

export default Actions;
