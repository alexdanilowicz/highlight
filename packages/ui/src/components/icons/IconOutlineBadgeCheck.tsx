import React from 'react'
import { IconProps } from './types'

export const IconOutlineBadgeCheck = ({
	size = '1em',
	...props
}: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			focusable="false"
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M9.133 3.13a4.42 4.42 0 0 1 5.734 0c.388.33.87.53 1.378.57A4.42 4.42 0 0 1 20.3 7.755c.04.508.24.99.57 1.378a4.42 4.42 0 0 1 0 5.734c-.33.388-.53.87-.57 1.378a4.42 4.42 0 0 1-4.055 4.055c-.508.04-.99.24-1.378.57a4.42 4.42 0 0 1-5.734 0 2.42 2.42 0 0 0-1.378-.57A4.42 4.42 0 0 1 3.7 16.245a2.42 2.42 0 0 0-.57-1.378 4.42 4.42 0 0 1 0-5.734c.33-.388.53-.87.57-1.378A4.42 4.42 0 0 1 7.755 3.7c.508-.04.99-.24 1.378-.57Zm4.437 1.522a2.42 2.42 0 0 0-3.14 0 4.42 4.42 0 0 1-2.516 1.042 2.42 2.42 0 0 0-2.22 2.22 4.42 4.42 0 0 1-1.042 2.516 2.42 2.42 0 0 0 0 3.14 4.42 4.42 0 0 1 1.042 2.516 2.42 2.42 0 0 0 2.22 2.22 4.42 4.42 0 0 1 2.516 1.042 2.42 2.42 0 0 0 3.14 0 4.42 4.42 0 0 1 2.516-1.042 2.42 2.42 0 0 0 2.22-2.22 4.42 4.42 0 0 1 1.042-2.516 2.42 2.42 0 0 0 0-3.14 4.42 4.42 0 0 1-1.042-2.516 2.42 2.42 0 0 0-2.22-2.22 4.42 4.42 0 0 1-2.516-1.042Zm2.137 4.64a1 1 0 0 1 0 1.415l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
