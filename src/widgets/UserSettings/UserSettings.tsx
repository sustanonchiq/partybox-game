import { FC, useEffect, useState } from 'react'
import Title from '../../ui/Title/Title'
import Input from '../../ui/Input/Input'
import { UserT } from '../../shared/types'
import Button from '../../ui/Button/Button'

import MaleIcon from '../../assets/icons/man_icon_dark.svg'
import MaleActiveIcon from '../../assets/icons/man_icon_active.svg'
import FemaleIcon from '../../assets/icons/woman_icon_dark.svg'
import FemaleActiveIcon from '../../assets/icons/woman_icon_active.svg'

import ChevronLeft from '../../assets/icons/triangle_left.svg'
import ChevronRight from '../../assets/icons/triangle_right.svg'

import Avatar1 from '../../assets/icons/avatars/Alpaca.png'
import Avatar2 from '../../assets/icons/avatars/Bik.png'
import Avatar3 from '../../assets/icons/avatars/Bobr.png'
import Avatar4 from '../../assets/icons/avatars/Capybara.png'
import Avatar5 from '../../assets/icons/avatars/Cherepaha.png'
import Avatar6 from '../../assets/icons/avatars/Enot.png'
import Avatar7 from '../../assets/icons/avatars/Flamingo.png'
import Avatar8 from '../../assets/icons/avatars/Gorila.png'
import Avatar9 from '../../assets/icons/avatars/Gus.png'
import Avatar10 from '../../assets/icons/avatars/Horyok.png'
import Avatar11 from '../../assets/icons/avatars/Kenguru.png'
import Avatar12 from '../../assets/icons/avatars/Koala.png'
import Avatar13 from '../../assets/icons/avatars/Korova.png'
import Avatar14 from '../../assets/icons/avatars/Kot.png'
import Avatar15 from '../../assets/icons/avatars/Kurica.png'
import Avatar16 from '../../assets/icons/avatars/Lemur.png'
import Avatar17 from '../../assets/icons/avatars/Lenivec.png'
import Avatar18 from '../../assets/icons/avatars/Lev.png'
import Avatar19 from '../../assets/icons/avatars/Lis.png'
import Avatar20 from '../../assets/icons/avatars/Lyagushka.png'
import Avatar21 from '../../assets/icons/avatars/Mish.png'
import Avatar22 from '../../assets/icons/avatars/MorKot.png'
import Avatar23 from '../../assets/icons/avatars/Morj.png'
import Avatar24 from '../../assets/icons/avatars/Nosorog.png'
import Avatar25 from '../../assets/icons/avatars/Obezyana.png'
import Avatar26 from '../../assets/icons/avatars/Olen.png'
import Avatar27 from '../../assets/icons/avatars/Orel.png'
import Avatar28 from '../../assets/icons/avatars/Ovca.png'
import Avatar29 from '../../assets/icons/avatars/Pelikan.png'
import Avatar30 from '../../assets/icons/avatars/Pingvin.png'
import Avatar31 from '../../assets/icons/avatars/RedPanda.png'
import Avatar32 from '../../assets/icons/avatars/Sobaka.png'
import Avatar33 from '../../assets/icons/avatars/Sova.png'
import Avatar34 from '../../assets/icons/avatars/Svin.png'
import Avatar35 from '../../assets/icons/avatars/Verblud.png'
import Avatar36 from '../../assets/icons/avatars/Vidra.png'
import Avatar37 from '../../assets/icons/avatars/WhiteBear.png'
import Avatar38 from '../../assets/icons/avatars/Zayac.png'

interface UserSettingsPropsI {}

const UserSettings: FC<UserSettingsPropsI> = () => {
	const [userData, setUserData] = useState<UserT>({
		username: '',
		imgPath: '',
		sex: 'male',
	})

	const [activeChunk, setActiveChunk] = useState(0)
	const chunkSize = 8
	const avatars: string[] = [
		Avatar1,
		Avatar2,
		Avatar3,
		Avatar4,
		Avatar5,
		Avatar6,
		Avatar7,
		Avatar8,
		Avatar9,
		Avatar10,
		Avatar11,
		Avatar12,
		Avatar13,
		Avatar14,
		Avatar15,
		Avatar16,
		Avatar17,
		Avatar18,
		Avatar19,
		Avatar20,
		Avatar21,
		Avatar22,
		Avatar23,
		Avatar24,
		Avatar25,
		Avatar26,
		Avatar27,
		Avatar28,
		Avatar29,
		Avatar30,
		Avatar31,
		Avatar32,
		Avatar33,
		Avatar34,
		Avatar35,
		Avatar36,
		Avatar37,
		Avatar38,
	]
	const renderAvatars = (chunkSize: number) => {
		const separatedAvatars: Array<string[]> = []

		for (let i = 0; i < avatars.length; i++) {
			if (i % chunkSize === 0) {
				separatedAvatars.push([])
				separatedAvatars[i / chunkSize].push(avatars[i])
			} else {
				separatedAvatars[Math.floor(i / chunkSize)].push(avatars[i])
			}
		}

		return separatedAvatars.map((chunk, i) => {
			return (
				<div
					className={`${
						activeChunk === i ? 'flex' : 'hidden'
					} flex-wrap gap-2 justify-between h-[140px] w-full min-w-[280px]`}>
					{chunk.map((item) => {
						return (
							<div
								key={item}
								onClick={() => setUserData({ ...userData, imgPath: item })}
								className={`relative w-[60px] h-[60px] rounded-full cursor-pointer overflow-hidden ${
									avatars.indexOf(item) === avatars.length - 1 ? 'mr-auto' : ''
								}`}>
								{userData.imgPath === item ? (
									<div className='absolute top-0 left-0 right-0 bottom-0 shadow-innerLg'></div>
								) : null}
								<img className='block w-full h-full' src={item} alt='' />
							</div>
						)
					})}
				</div>
			)
		})
	}

	useEffect(() => {
		if (activeChunk > Math.floor(avatars.length / chunkSize)) setActiveChunk(0)
		if (activeChunk < 0) setActiveChunk(Math.floor(avatars.length / chunkSize))
	}, [activeChunk, avatars.length])

	return (
		<div className='w-[280px] flex flex-col gap-10 text-center items-center'>
			<div className='w-full flex flex-col gap-2'>
				<Title tag='h2'>Введите ваше имя</Title>
				<Input
					className='text-center font-bold tracking-widest placeholder:text-[#49688D] w-full'
					placeholder='Максимум 8 символов'
				/>
			</div>

			<div className='w-full flex flex-col gap-4'>
				<div className='flex justify-between'>
					<img
						src={ChevronLeft}
						className='block w-[18px] cursor-pointer'
						alt=''
						onClick={() => setActiveChunk(activeChunk - 1)}
					/>
					<Title tag='h2'>Выберите аватарку</Title>
					<img
						src={ChevronRight}
						className='block w-[18px] cursor-pointer'
						alt=''
						onClick={() => setActiveChunk(activeChunk + 1)}
					/>
				</div>

				<div className='flex flex-row justify-start gap-[100px] overflow-hidden w-full'>
					{renderAvatars(chunkSize)}
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<Title tag='h2'>Выберите пол</Title>
				<div className='flex justify-center gap-8'>
					<div
						className='w-[30px] h-[50px] cursor-pointer'
						onClick={() => setUserData({ ...userData, sex: 'male' })}>
						<img
							className='block w-full h-full'
							src={userData.sex === 'male' ? MaleActiveIcon : MaleIcon}
							alt=''
						/>
					</div>
					<div
						className='w-[30px] h-[50px] cursor-pointer'
						onClick={() => setUserData({ ...userData, sex: 'female' })}>
						<img
							className='block w-full h-full'
							src={userData.sex === 'female' ? FemaleActiveIcon : FemaleIcon}
							alt=''
						/>
					</div>
				</div>
			</div>
			<Button className='mt-6 w-[150px]'>Войти</Button>
		</div>
	)
}

export default UserSettings
