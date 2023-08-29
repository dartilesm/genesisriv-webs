import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps<C extends ElementType> = {
    as?: C;
    children: React.ReactNode;
} & ComponentPropsWithoutRef<C>
 
function Button <C extends ElementType>({ children, as, ...props }: ButtonProps<C>) {
    const Component = as || 'button';

    return <Component className="inline-block text-[#5C17B6] bg-[#D4B3FF] hover:bg-[#6D25CA] hover:text-[#FDFDFD] hover:shadow-[0_4px_10px_0_rgba(53,0,122,0.20)] focus:bg-[#6317DA] focus:outline-4 focus:outline-offset-4 focus:outline-[#EAD9FF] focus:text-[#FDFDFD] font-semibold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full h-10 " {...props}>
        { children }
    </Component>
}

export default Button; 