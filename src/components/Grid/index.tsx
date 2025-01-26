import React from 'react'

type GridProps = {
    columns: number;
	children: React.ReactNode
};

export function Grid({ children }: GridProps)  {
    return (
        <div
            className="grid gap-4 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4"
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
