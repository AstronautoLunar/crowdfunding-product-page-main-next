import { 
    createContext,
    useState,
    useContext,
} from 'react';

type WindowContextData = {
    button: boolean;
    purchase: boolean;
    toggleButton: () => void;
    togglePurchase: () => void;
}

const WindowContext = createContext({} as WindowContextData);

export function WindowProvider({ children }) {
    let [ button, setButton ] = useState(false);
    let [ purchase, setPurchase ] = useState(false);
    // let [ valuePurchase, setValuePurchase] = useState(0);

    function toggleButton() {
        setButton(button = !button);
    }

    function togglePurchase() {
        setButton(button = false);
        setPurchase(purchase = !purchase);
    }

    // function purchaseObject(e) {
    //     setValuePurchase(valuePurchase = e.target.value)
    // }

    return (
        <WindowContext.Provider value={{ 
            button, 
            toggleButton, 
            purchase,
            togglePurchase,
        }}>
            { children }
        </WindowContext.Provider>
    );
}

export function useWindow() {
    return useContext(WindowContext);
}