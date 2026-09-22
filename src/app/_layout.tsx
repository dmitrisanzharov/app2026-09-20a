import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: 'yellow' },
                headerTintColor: 'red'
            }}
        >
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='about' options={{ title: 'About' }} />
            <Stack.Screen name='meals' options={{ title: 'Meals' }} />
        </Stack>
    );
}
