import React from 'react'

//components
import TrumpQuote from './TrumpQuote'

const App = () => {
	return (
		<>
			<div className="container">
				<div className="sideContainer">
					<div className="sidebar"></div>
				</div>
				<div className="content">
					<div className="bgColour">
						<h1>Tronald Dump Quote Generator</h1>
					</div>
					<TrumpQuote />
					<div>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/i05gKtHWjGY?autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
				</div>
				<div className="sideContainer">
					<div className="sidebar"></div>
				</div>
			</div>
		</>
	)
}

export default App
