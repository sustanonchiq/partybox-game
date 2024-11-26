import { FC, ReactNode } from 'react'

interface ButtonPropsI
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<ButtonPropsI> = (props) => {
	const { children, className, ...buttonProps } = props
	return (
		<button
			{...buttonProps}
			className={`rounded-md bg-primary text-xl text-white bg-[#2b5a90] pt-2 pb-3 px-8 hover:opacity-80 ${
				className || ''
			}`}>
			{children}
		</button>
	)
}

export default Button
