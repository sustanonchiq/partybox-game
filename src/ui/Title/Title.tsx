import { FC, ReactNode } from 'react'

interface TitlePropsI {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: ReactNode
}

const Title: FC<TitlePropsI> = ({ tag, children }) => {
	switch (tag) {
		case 'h1':
			return <h1 className='text-white text-[18px]'>{children}</h1>
		case 'h2':
			return <h2 className='text-white text-[18px]'>{children}</h2>
		case 'h3':
			return <h3 className='text-white text-[18px]'>{children}</h3>
		case 'h4':
			return <h4 className='text-white text-[18px]'>{children}</h4>
		case 'h5':
			return <h5 className='text-white text-[18px]'>{children}</h5>
		default:
			return <h6 className='text-white text-[18px]'>{children}</h6>
	}
}

export default Title
