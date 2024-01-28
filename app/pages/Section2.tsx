import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { LuArrowRight } from 'react-icons/lu';
import Diagram from '../../public/imgs/diagram.png';
import Image from 'next/image';
export default function Section2() {
	return (
		<Container>
			<div className='flex  items-center gap-4 lg:flex-row flex-col justify-between overflow-hidden'>
				<div className='flex flex-col gap-6  lg:max-w-[60%]'>
					<h1 className='font-bold text-5xl lg:text-6xl '>
						Get all the tools your team needs
					</h1>
					<p className='text-zinc-600'>
						Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
						Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus
						quis massa tellus imperdiet aenean nulla ornare suspendisse ut ac
						neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet
						aenean nulla id.
					</p>
					<a className='text-blue-600 font-medium flex items-center gap-2'>
						<p>See How it heklped others </p>
						<LuArrowRight />
					</a>
				</div>
				<div>
					<Image alt='' src={Diagram} />
				</div>
			</div>
		</Container>
	);
}
