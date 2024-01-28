import React from 'react';
import Container from '../../components/Container';
import Image from 'next/image';
import Balloons from '../../../public/imgs/balloons.png';
import { LuArrowRight } from 'react-icons/lu';
import styles from './styles.module.css';

export default function Section3() {
	return (
		// <div>
		<div className='w-full lg:w-auto my-24 lg:mx-16 lg:my-4 mb-32'>
			<div className='relative'>
				<div className=' lg:rounded-3xl bg-[RGBA(68,28,135,0.6)] purple-500 top-0 left-0 w-full h-full absolute z-10 flex items-center'>
					<div className='pl-6 flex flex-col gap-6  lg:max-w-[60%] text-white  lg:w-1/2 ml-auto pr-12 '>
						<h1 className='font-bold text-4xl lg:text-5xl '>
							Problems come and get solved with ease
						</h1>
						<p>
							Etiam condimentum duis molestie malesuada volutpat pellentesque
							sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi
							tempus quis massa tellusortis sed tincidunt. Mi tempus quis massa
							tellus imperdiet aenean nulla id.
						</p>
						<a className=' font-medium flex items-center gap-2'>
							<p>See How it heklped others </p>
							<LuArrowRight />
						</a>
					</div>
				</div>
				<div className={styles.customStyle} />
			</div>
		</div>
		// </div>
	);
}
