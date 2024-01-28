import Image from 'next/image';
import Header from './components/Header';
import Hero from './pages/Hero';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import Section4 from './pages/Section4';
import Section5 from './pages/Section5';
import Footer from './pages/Footer';

export default function Home() {
	return (
		<main>
			<Header />
			<div className='max-w-[1400px] mx-auto'>
				<Hero />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Footer />
			</div>
		</main>
	);
}
