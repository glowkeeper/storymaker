import { useState, useEffect } from 'react'

export const mobileMaxWidth = 768

export const getIsMobile = () => window.innerWidth <= mobileMaxWidth;

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return isMobile;
}