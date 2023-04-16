import HomeBottom from '@/components/home/HomeBottom';
import HomeMiddle from '@/components/home/HomeMiddle';
import HomeTop from '@/components/home/HomeTop';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
	return (
		<>
			<HomeTop />
			<HomeMiddle />
			<HomeBottom />
		</>
	)
};

export default Home;