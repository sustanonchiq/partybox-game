import { FC } from 'react'
import Input from '../../ui/Input/Input'
import Title from '../../ui/Title/Title'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FindGamePropsI {}

const FindGame: FC<FindGamePropsI> = () => {
	return (
		<>
			<div className='flex flex-col text-center gap-2'>
				<Title tag='h6'>Введите код комнаты</Title>
				<Input className='font-bold uppercase tracking-widest text-center' />
				<span className='text-gray-600 text-[18px] cursor-pointer'>или отсканируйте QR-код</span>
			</div>
		</>
	)
}

export default FindGame
