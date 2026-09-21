import * as Device from 'expo-device';
import { Platform, ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
    console.log('platform', Platform);
    console.log('Device', Device);

    return (
        <ScrollView>
            <Text style={styles.headerText}>Should be on both screens 2 test 3</Text>
            <Text style={styles.largeText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerText: {
        backgroundColor: 'yellow'
    },
    largeText: {
        fontSize: 90
    }
});
