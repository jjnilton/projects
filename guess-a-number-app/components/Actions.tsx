import { Button, StyleSheet, View } from 'react-native';
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

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
    },
    actionButton: {
        width: '45%',
    }, 
});

export default Actions;
