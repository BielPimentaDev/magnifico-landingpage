import React from 'react';

interface ContainerProps {
	children: any;
	className?: string;
}

export default function Container(props: ContainerProps) {
	return (
		<div className={`my-24 lg:mx-16 mx-4 mb-32   ${props.className}`}>
			{props.children}
		</div>
	);
}
