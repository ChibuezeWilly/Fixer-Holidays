import React from 'react'
import Company from './Company'
import FooterContact from './FooterContact'
import Gallery from './Gallery'
import Bottom from './Bottom'

const Footer = () => {
  return (
		<div className="mt-20 bg-black h-auto py-5 px-3">
			<div className="md:mx-16 grid justify-around md:justify-evenly items-center grid-cols-1 md:grid-cols-3">
				<Company />
				<FooterContact />
				<Gallery />
			</div>
            <Bottom />
		</div>
	);
}

export default Footer
