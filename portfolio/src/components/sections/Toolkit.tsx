import { useEffect } from "react";

export default function Toolkit() {
    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return null;
}