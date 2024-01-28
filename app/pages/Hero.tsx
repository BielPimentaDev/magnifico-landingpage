import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import bigPic1 from '../../public/imgs/bigPic1.png';
import Button from '../components/Button';
import { MdOutlineEmail } from 'react-icons/md';
import Company1 from '../../public/imgs/company1.png';
import Company2 from '../../public/imgs/company2.png';
import Company3 from '../../public/imgs/company3.png';
import Company4 from '../../public/imgs/company4.png';

export default function Hero() {
	return (
		<Container>
			<div className='flex  flex-col justify-between gap-12 lg:flex-row '>
				<div className='gap-6 flex flex-col '>
					<h1 className='font-bold text-5xl lg:text-7xl '>
						Team projects,
						<br /> done well
					</h1>
					<p className='text-zinc-600 '>
						The only platform that gives your team all the tools needed to work
						together on their awesome projects.{' '}
					</p>
					<div className='flex'>
						<div className='flex-1 justify-center flex mr-4  relative'>
							<i className='text-2xl absolute left-2 top-[50%] translate-y-[-50%] text-zinc-300'>
								<MdOutlineEmail />
							</i>
							<input
								className='border border-zinc-300 p-2 w-full rounded-lg pl-9'
								placeholder='Enter work email...'
							/>
						</div>
						<Button title='Sing Up Free' />
					</div>

					<ul className='bg-gray-100 p-4 lg:flex lg:justify-around grid grid-cols-2 place-content-center place-items-center gap-2 '>
						<li>
							<div className='flex gap-2  justify-center items-center'>
								<Image alt='company 1' src={Company4} />
								<h2 className='text-gray-400 font-bold'>SHELLS</h2>
							</div>
						</li>
						<li>
							<div className='flex gap-2  justify-center items-center'>
								<Image alt='company 1' src={Company1} />
								<h2 className='text-gray-400 font-bold'>SmartFinder</h2>
							</div>
						</li>
						<li>
							<div className='flex gap-2  justify-center items-center'>
								<Image alt='company 1' src={Company2} className='w-8' />
								<h2 className='text-gray-400 font-bold'>ArtVenue</h2>
							</div>
						</li>
						<li>
							<div className='flex gap-2  justify-center items-center'>
								<Image alt='company 1' src={Company3} />
								<h2 className='text-gray-400 font-bold'>WAVES</h2>
							</div>
						</li>
					</ul>
				</div>
				<Image src={bigPic1} alt='group of people around a computer' />
			</div>
		</Container>
	);
}
