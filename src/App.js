import React from 'react';
import Header from './components/Header';
import Forms from './components/Forms';
import Footer from './components/Footer';

function App() {
	return (
		<div className='ui container' style={{ marginTop: '10rem' }}>
			<Header />
			<Forms />
			<Footer />
		</div>
	);
}

export default App;
