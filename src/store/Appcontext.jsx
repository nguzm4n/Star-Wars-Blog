import { createContext, useState } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = () => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updateStore) => {
                    setState(prevState => ({
                        store: (prevState.store, updateStore ),
                        actions: { ...prevState.actions }
                    }));
                }
            })
        );

        return (
            <Context.Provider value={state}>
                <PassedComponent />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
