import { createContext, useCallback, useContext, useState } from "react";

export const NotifContext = createContext({
    ctx: {},
    addCtx: () => { },
    removeCtx: () => { }
});


const NotificationProvider = ({ children }) => {
    const [ctx, setCtx] = useState(null);

    const removeCtx = () => setCtx(null);
    const addCtx = (message, severity, status) => setCtx({ message, severity, status });

    const contextValue = {
        ctx: ctx,
        addCtx: useCallback((message, severity, status) => addCtx(message, severity, status), []),
        removeCtx: useCallback(() => removeCtx(), [])
    };

    return (
        <NotifContext.Provider value={contextValue}>
            {children}
        </NotifContext.Provider>
    )
};

export default NotificationProvider;