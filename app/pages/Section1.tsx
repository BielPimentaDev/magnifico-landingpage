import React from 'react';
import Container from '../components/Container';
import Title from '../components/Title';
import { LuArrowRight } from 'react-icons/lu';
import GroupPic1 from '../../public/imgs/groupPic1.png';
import GroupPic2 from '../../public/imgs/groupPic2.png';
import GroupPic3 from '../../public/imgs/groupPic3.png';
import Image from 'next/image';
import GradeIcons from '../../public/imgs/gradeIcons.png';

export default function Section1() {
	return (
		<Container>
			<div className='flex gap-4 flex-col lg:flex-row-reverse justify-between'>
				<div className='flex flex-col gap-6  lg:max-w-[60%]'>
					<h1 className='font-bold text-5xl lg:text-6xl '>
						Enjoy your time <br />
						working
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

				<div className='flex gap-2 my-8  relative overflow-hidden '>
					<Image
						alt='grid of icons'
						src={GradeIcons}
						className='absolute bottom-4 -z-10 -left-4'
					/>
					<Image
						alt='group picture'
						src={GroupPic1}
						className='w-full  h-52 self-end object-contain'
					/>
					<Image
						alt='group picture'
						src={GroupPic2}
						className='w-full h-52 object-cover'
					/>
					<Image
						alt='group picture'
						src={GroupPic3}
						className='w-full h-52 self-center'
					/>
				</div>
			</div>
		</Container>
	);
}
