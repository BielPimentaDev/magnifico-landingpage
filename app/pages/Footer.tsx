import React from 'react';
import Container from '../components/Container';

export default function Footer() {
	return (
		<Container>
			<div className='flex lg:items-center text-gray-600 font-medium flex-col lg:flex-row '>
				<div className='flex-1  flex lg:items-center lg:gap-1 gap-3 flex-col lg:flex-row'>
					<h1 className='font-bold text-2xl text-black'>magnifico</h1>
					<span className='font-normal'>@ 2023. All rights reserved.</span>
				</div>
				<ul className='flex items-center  gap-6 lg:mt-0 mt-6 flex-wrap'>
					<li>Terms</li>
					<li>Privacy</li>
					<li>Support</li>
					<li>About</li>
					<li>Resources</li>
					<li>Contact</li>
				</ul>
			</div>
		</Container>
	);
}
