export interface AvatarProps {
	image?: string;
	firstName?: string;
	lastName?: string;
	imageAlt: string;
	ref?: React.RefObject<HTMLImageElement>;
	size?: number;
	tooltipText?: string;
	shape?: 'rounded' | 'sharp' | 'curved';
	onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
	className?: string;
	borderColor?:
		| 'grey'
		| 'light'
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'error'
		| 'success'
		| 'warning'
		| 'dark';
}
