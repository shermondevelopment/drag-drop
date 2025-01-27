export function Flex({ children }: { children: React.ReactNode })  {
    return (
        <div
          className="flex overflow-auto bg-black px-[100px]"
        >
            {children}
        </div>
    )
}
