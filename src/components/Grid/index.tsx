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

export function Flex({ children }: { children: React.ReactNode })  {
    return (
        <div
          className="flex overflow-auto bg-black px-[100px]"
        >
            {children}
        </div>
    )
}
