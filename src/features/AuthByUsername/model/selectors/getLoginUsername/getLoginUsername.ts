import { LoginSchema } from 'features/AuthByUsername';
import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
