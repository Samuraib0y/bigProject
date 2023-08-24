import { LoginSchema } from 'features/AuthByUsername';
import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
