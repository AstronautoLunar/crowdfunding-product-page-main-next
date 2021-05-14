import { 
    createContext,
    useState,
    useContext,
} from 'react';

const WindowContext = createContext({});

type WindowContextData = {
    button: boolean;
    toggleButton: () => void;
}

export function WindowProvider({ children }) {
    let [ button, setButton ] = useState(false);

    function toggleButton() {
        setButton(button = !button);
    }
    
    return (
        <WindowContext.Provider value={{ button, toggleButton } as WindowContextData}>
            { children }
        </WindowContext.Provider>
    );
}

export function useWindow() {
    return useContext(WindowContext);
}