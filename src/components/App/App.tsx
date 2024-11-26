import HomePage from '../../Pages/HomePage/HomePage'
import './App.module.scss'

import BgImage from '../../assets/images/bg.jpg'

function App() {
	return (
		<div
			style={{ background: `url(${BgImage}) center center/cover no-repeat` }}
			className='flex items-start sm:items-center justify-center py-8 h-screen'>
			<HomePage />
		</div>
	)
}

export default App
