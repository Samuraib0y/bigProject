import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import cls from './StoreProvider.module.scss';

interface StoreProviderProps{
    children?: ReactNode;
    initialState?: StateSchema;
}

const store = createReduxStore();

export const StoreProvider = (props : StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
