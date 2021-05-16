import { 
    createContext,
    useState,
    useContext,
} from 'react';

type WindowContextData = {
    button: boolean;
    toggleButton: () => void;
    stayWindow: () => void;
}

const WindowContext = createContext({} as WindowContextData);

export function WindowProvider({ children }) {
    let [ button, setButton ] = useState(false);

    function toggleButton() {
        setButton(button = !button);
    }
    
    function stayWindow() {
        setButton(button = true);
    }

    return (
        <WindowContext.Provider value={{ button, toggleButton, stayWindow }}>
            { children }
        </WindowContext.Provider>
    );
}

export function useWindow() {
    return useContext(WindowContext);
}