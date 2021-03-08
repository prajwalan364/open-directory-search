import React, { useState } from 'react';
import { filters } from '../utils/filters';

const Forms = () => {
	const directoryTypes = [
		'Anything',
		'Audio',
		'Images',
		'Videos',
		'Torrents',
		'Archives',
		'Office',
		'eBooks',
	];

	const [text, setText] = useState('');
	const [filter, setFilter] = useState('');

	const link = 'https://www.google.com/search?q=';
	const inURL = ' -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
	const inText = 'intext:"' + text + '"';

	const handleSubmit = (e) => {
		e.preventDefault();

		let page = link + inText + ' intitle:"index.of"' + filters[filter] + inURL;
		window.open(page, '_blank');
	};

	return (
		<div className='ui grid mobile'>
			<div
				className='column ten wide'
				style={{ marginLeft: 'auto', marginRight: 'auto' }}
			>
				<div
					className='ui fluid action input large'
					style={{ marginBottom: '1rem' }}
				>
					<input
						type='text'
						onChange={(e) => {
							setText(e.target.value);
						}}
						placeholder='Search Anything  eg: Mr Robot'
						className='fluid'
					/>
				</div>

				<select
					className='ui compact selection dropdown fluid large'
					onChange={(e) => setFilter(e.target.value)}
					style={{ marginBottom: '2rem' }}
				>
					{directoryTypes.map((value, index) => (
						<option key={index} value={value}>
							{value}
						</option>
					))}
				</select>

				<button
					className='ui button blue large fluid'
					style={{}}
					onClick={handleSubmit}
				>
					<i className='search icon'></i>Search
				</button>
			</div>
		</div>
	);
};

export default Forms;
