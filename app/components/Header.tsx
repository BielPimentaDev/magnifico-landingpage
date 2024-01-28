import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';
import Button from './Button';
import { IoIosMenu } from 'react-icons/io';

export default function Header() {
	return (
		<header className=' w-full flex flex-row items-center justify-between px-8 p-6 '>
			<h1 className='font-bold text-3xl '>magnifico</h1>

			<nav className='hidden lg:block'>
				<ul className='flex gap-8'>
					<li className='flex items-center gap-1'>
						<a className='font-semibold'>Products</a>
						<FaChevronDown />
					</li>
					<li className='flex items-center gap-1'>
						<a className='font-semibold'>Products</a>
						<FaChevronDown />
					</li>
					<li className='flex items-center gap-1'>
						<a className='font-semibold'>Products</a>
						<FaChevronDown />
					</li>
					<li className='flex items-center gap-1'>
						<a className='font-semibold'>Products</a>
						<FaChevronDown />
					</li>
				</ul>
			</nav>

			<div className='lg:flex gap-6 items-center hidden '>
				<a className='text-blue-600 font-medium '>Log in</a>
				<Button title='Sing Up Free' />
			</div>
			<button className='text-3xl lg:hidden'>
				<IoIosMenu />
			</button>
		</header>
	);
}
