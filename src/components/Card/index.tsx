import { CSSProperties, forwardRef } from 'react'

export type CardItemProps = React.HTMLAttributes<HTMLDivElement> & {
    id: number;
    withOpacity?: boolean;
    isDragging?: boolean;
};


// eslint-disable-next-line react/display-name
export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(({ children, withOpacity, isDragging, style, ...props }, ref) => {
	const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        transformOrigin: '50% 50%',
        height: '140px',
        width: '300px',
        borderRadius: '10px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isDragging  ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        ...style,
    }

	return (
		<div style={inlineStyles} {...props} ref={ref}>
			{children}
		</div>
	)
})

