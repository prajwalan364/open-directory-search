import React from 'react';

const Footer = () => {
	return (
		<div
			style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
		>
			<h3 style={{ fontFamily: 'Ubuntu', fontWeight: '100' }}>
				<i className='code icon'></i> with <i className='heart icon'></i> By{' '}
				<a
					style={{ cursor: 'pointer', color: 'inherit' }}
					href='https://github.com/prajwalan364'
				>
					Prajwalan <i className='github icon'></i>
				</a>
			</h3>
		</div>
	);
};

export default Footer;
