import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

export default function Section5() {
	return (
		<div className='my-24 lg:mx-16 mx-0 mb-32 '>
			<div className='lg:bg-gradient-to-br bg-gradient-to-r from-[#312E81] via-[#1E3A8A] to-[#701A75] lg:px-36 px-2 py-16 lg:rounded-[30px]'>
				<div className='flex flex-col gap-6 text-center items-center text-white '>
					<h1 className='font-bold text-5xl lg:text-6xl '>
						Join the community today
					</h1>
					<p className=''>
						Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
						Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
						felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
						in accumsan.
					</p>
					<Button title='Sign Up Free' />
				</div>
			</div>
		</div>
	);
}
