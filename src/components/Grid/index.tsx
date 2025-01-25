import React from 'react'

type GridProps = {
    columns: number;
	children: React.ReactNode
};

export function Grid({ children, columns }: GridProps)  {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridGap: 10,
            }}
        >
            {children}
        </div>
    )
}

