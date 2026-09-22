import HomeHeader from '@/components/HomeHeader';
import { colorRed } from '@/styles/global';
import { Text } from 'react-native';

export default function About() {
    return (
        <>
            <HomeHeader />
            <Text style={{ color: colorRed }}>About</Text>
        </>
    );
}
