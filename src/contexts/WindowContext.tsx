import { 
    createContext,
    useState,
    useContext,
} from 'react';

type WindowContextData = {
    button: boolean;
    purchase: boolean;
    valuePurchase: number;
    toggleButton: () => void;
    togglePurchase: () => void;
    purchaseObject: (e: any) => void;
}

const WindowContext = createContext({} as WindowContextData);

export function WindowProvider({ children }) {
    let [ button, setButton ] = useState(false);
    let [ purchase, setPurchase ] = useState(false);
    let [ valuePurchase, setValuePurchase] = useState(0);

    function toggleButton() {
        setButton(button = !button);
    }

    function togglePurchase() {
        if(valuePurchase > 0) {
            setButton(button = false);
        }
        
        setPurchase(purchase = !purchase);
    }

    function purchaseObject(e) {
        setValuePurchase(valuePurchase = e.target.value);
    }

    return (
        <WindowContext.Provider value={{ 
            button, 
            toggleButton,
            valuePurchase,
            purchase,
            togglePurchase,
            purchaseObject,
        }}>
            { children }
        </WindowContext.Provider>
    );
}

export function useWindow() {
    return useContext(WindowContext);
}