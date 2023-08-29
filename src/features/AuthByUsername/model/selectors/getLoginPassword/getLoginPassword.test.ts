import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '12223',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12223');
    });
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
