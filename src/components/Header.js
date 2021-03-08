import React from 'react';

const Header = () => {
	return (
		<header>
			<div className='ui grid'>
				<div
					className='column eight wide'
					style={{ marginLeft: 'auto', marginRight: 'auto' }}
				>
					<div className='ui center aligned basic segment'>
						<div className='ui icon header'>
							<i className='massive file icon'></i>
							<h3
								className='mobile'
								style={{
									fontFamily: 'Ubuntu',
									letterSpacing: '3px',
									//fontSize: '30px',
								}}
							>
								Open Directory Search
							</h3>
							<p
								className='mobile-p'
								style={{ fontFamily: 'Segoe UI', fontWeight: 'normal' }}
							>
								Find open directories with this tool. It uses google's engine
								for the actual search.
							</p>
							<p
								className='mob-p'
								style={{
									fontWeight: 'normal',
									//fontSize: '12pt',
									fontFamily: 'Ubuntu',
								}}
							>
								Get direct download links for almost anything.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
