import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Pressable, Share, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const [text, setText] = useState('');
    console.log('Clipboard', Clipboard);
    // console.log('Haptics object', Haptics);
    // console.log('alert object', Alert);

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

    useFocusEffect(
        useCallback(() => {
            console.log('Screen is focused');
            return () => {
                console.log('Screen is unfocused');
            };
        }, [])
    );

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmounted');
        };
    }, []);

    const hapticsFn = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    };

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
                    Alert.alert('Alert', `You entered: ${text}`);
                }}
            />
            <Button title='go to about' onPress={() => router.push('/about')} />
            <Pressable onLongPress={() => console.log('long press pressable')}>
                <Text>Long press pressable</Text>
            </Pressable>
            <TouchableOpacity
                onLongPress={() => {
                    console.log('long press touchable');
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                }}
            >
                <Text>Long press touchable</Text>
            </TouchableOpacity>
            <View
                style={{
                    height: 1,
                    backgroundColor: '#ccc',
                    width: '100%'
                }}
            />
            <Button
                title='vibrate'
                onPress={() => {
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    Share.share({
                        message: 'Check out this cool app!'
                    });
                }}
            />

            <View
                style={{
                    height: 1,
                    backgroundColor: '#ccc',
                    width: '100%',
                    marginBottom: 5
                }}
            />
            <Button
                title='share'
                onPress={() => {
                    Share.share({
                        message: 'Check out this cool app!'
                    });
                }}
            />

            <View
                style={{
                    height: 1,
                    backgroundColor: '#ccc',
                    width: '100%',
                    marginBottom: 5
                }}
            />
            <Button
                title='clipboard'
                onPress={() => {
                    Clipboard.setStringAsync('Hello from Expo!');
                }}
            />

            <View
                style={{
                    height: 1,
                    backgroundColor: '#ccc',
                    width: '100%',
                    marginBottom: 5
                }}
            />

            {/* <ReminderToggle /> */}
        </>
    );
}
