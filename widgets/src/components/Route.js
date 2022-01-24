import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChanged = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChanged);

        return () => {
            return window.removeEventListener("popstate", onLocationChanged);
        };
    }, []);

    return currentPath === path
        ? children
        : null;
};

export default Route;