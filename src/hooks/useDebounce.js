import { useEffect, useState } from "react";

function useDebounce(callback, delay) {
    const [debouncedCallback, setDebouncedCallback] = useState(null);

    useEffect(() => {
        if (debouncedCallback) {
            const timeoutId = setTimeout(debouncedCallback, delay);

            return () => clearTimeout(timeoutId);
        }
    }, [debouncedCallback, delay]);

    return (...args) => {
        setDebouncedCallback(() => () => callback(...args));
    };
}

export default useDebounce