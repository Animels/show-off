import {ReactNode} from "react";


const Box = ({children, className}: { children: ReactNode, className?: string }) => {
    return <div className={` p-4 ${className}`}>{children}</div>;
}


export default Box
