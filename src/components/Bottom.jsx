import React from 'react'
import { FaCopyright } from 'react-icons/fa6'
const Bottom = () => {
  return (
		<div className="text-white mt-8 flex flex-row justify-center items-center company">
			<p className="flex flex-row">
				<FaCopyright className="text-4xl " />
                <img src={'/src/assets/images/logo.png'} alt="Logo" className='h-8 md:h-10 rounded-md ml-2' />
				<span className=' ml-3 text-base md:mt-2'>
                All rights reserved. Designed by Chibueze Williams</span>
			</p>
		</div>
	);
}

export default Bottom
