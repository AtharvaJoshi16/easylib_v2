export interface SwitchProps {
	defaultChecked?: boolean;
	className?: string;
	label: string;
	alignment: 'vertical' | 'horizontal';
	switchKey: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onIcon?: JSX.Element;
	offIcon?: JSX.Element;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'tertiary'
		| 'success'
		| 'warning'
		| 'error'
		| 'grey'
		| 'dark';
	size?: 'small' | 'medium' | 'large';
}
