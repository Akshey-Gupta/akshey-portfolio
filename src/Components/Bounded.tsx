import React from 'react'
import clsx from 'clsx'

type BoundedProps = {
    as?: React.ElementType,
    className?: string,
    children?: React.ReactNode,
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(({
    as: Comp = "section", className, children, ...restProps }, ref) => {
        return (
            <Comp ref={ref}
                className={clsx("px-10 py-10 md:px-10 md:py-14 lg:py-16", className)}
                {...restProps}>
                <div className='mx-auto w-full max-w-7x1'>{children}</div>
            </Comp>
        )
    })

export default withDisplayName('Bounded')(Bounded);
