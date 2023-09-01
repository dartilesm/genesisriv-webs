import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps<C extends ElementType> = {
    as?: C;
    children: React.ReactNode;
} & ComponentPropsWithoutRef<C>
 
function Button <C extends ElementType>({ children, as, ...props }: ButtonProps<C>) {
    const Component = as || 'button';

    return <Component className="inline-block text-[#4D05AB] bg-[#D4B3FF] hover:bg-[#5D10C1] hover:text-[#FEFEFE] hover:shadow-[0_4px_10px_0_rgba(53,0,122,0.20)] focus:bg-[#5D10C1] focus:outline-4 focus:outline-offset-4 focus:outline-[#EAD9FF] focus:text-[#FEFEFE] font-semibold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full h-10 " {...props}>
        { children }
    </Component>
}

export default Button; 