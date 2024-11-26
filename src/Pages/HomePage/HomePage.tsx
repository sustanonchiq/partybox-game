import { FC } from 'react'
import UserSettings from '../../widgets/UserSettings/UserSettings'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomePagePropsI {}

const HomePage: FC<HomePagePropsI> = () => {
	return <UserSettings />
}

export default HomePage
