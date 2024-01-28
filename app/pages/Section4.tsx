import React from 'react';
import Container from '../components/Container';
import { LuArrowRight } from 'react-icons/lu';
import Image from 'next/image';
import BigPic2 from '../../public/imgs/bigPic2.png';

export default function Section4() {
	return (
		<Container>
			<div className='flex justify-between gap-12 lg:flex-row flex-col'>
				<div className='flex flex-col gap-6  lg:max-w-[60%]'>
					<h1 className='font-bold text-5xl lg:text-6xl bg-red text-center'>
						Improve workflow
					</h1>

					<ul className=' rounded-md border-2 divide-x divide-slate-300 flex justify-between items-center text-center'>
						<li className=' flex-1 h-full p-3 bg-slate-100'>
							<h3 className='font-semibold'>Research</h3>
						</li>
						<li className=' flex-1 p-3'>
							<h3 className='font-semibold'>Plan</h3>
						</li>
						<li className=' flex-1 p-3'>
							<h3 className='font-semibold'>Design</h3>
						</li>
					</ul>

					<p className='text-zinc-600'>
						Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
						Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus
						quis massa tellus imperdiet aenean nulla ornare suspendisse ut ac
						neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet
						aenean nulla id.
					</p>
					<a className='text-blue-600 font-medium flex items-center gap-2'>
						<p>Check the tools </p>
						<LuArrowRight />
					</a>
				</div>
				<Image alt='' src={BigPic2} className='w-[550px] h-[400px]' />
			</div>
		</Container>
	);
}
