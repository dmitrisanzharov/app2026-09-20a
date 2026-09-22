import { Link } from 'expo-router';

export default function Index() {
    return (
        <>
            <ul>
                <li>
                    <Link href='/about'>Go to About</Link>
                </li>
                <li>
                    <Link href='/meals'>Meals</Link>
                </li>
            </ul>
        </>
    );
}
