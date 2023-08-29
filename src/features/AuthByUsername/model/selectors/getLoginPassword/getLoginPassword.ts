import { LoginSchema } from 'features/AuthByUsername';
import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
