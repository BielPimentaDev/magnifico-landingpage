import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

interface ButtonProps {
	title: string;
}
export default function Button(props: ButtonProps) {
	return (
		<button className='flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg'>
			{props.title}
			<i className='ml-2 text-lg'>
				<LuArrowRight />
			</i>
		</button>
	);
}
