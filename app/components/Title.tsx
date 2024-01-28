import React from 'react';

export default function Title(props: { text: any }) {
	return <h1 className='font-bold text-5xl lg:text-7xl '>{props.text}</h1>;
}
