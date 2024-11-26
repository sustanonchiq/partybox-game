import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputPropsI extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FC<InputPropsI> = (props) => {
	const { className, ...inputProps } = props
	return (
		<input
			className={`bg-blueDark p-3 outline-none rounded-lg text-white box-border ${className || ''}`}
			{...inputProps}
		/>
	)
}

export default Input
