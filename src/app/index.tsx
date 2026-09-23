import { useState } from 'react';
import { Alert, Button, Text, TextInput } from 'react-native';

export default function Index() {
    const [text, setText] = useState('');
    console.log('alert object', Alert);

    // useEffect(() => {
    //     const loadStorage = async () => {
    //         try {
    //             await AsyncStorage.setItem('myKey', 'anyText');
    //             const value = await AsyncStorage.getItem('myKey');
    //             console.log('storage get', value);
    //         } catch (error) {
    //             console.error('AsyncStorage error:', error);
    //         }
    //     };

    //     void loadStorage();
    // }, []);

    return (
        <>
            <Text>Hello</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button
                title='Show Alert'
                onPress={() => {
                    console.log('alert triggered');
                    Alert.alert('Alert', `You entered: ${text}`);
                }}
            />
        </>
    );
}
