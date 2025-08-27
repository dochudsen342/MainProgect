import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial';
import { getProfileError } from './getProfileError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
               error: 'error',
               isLoading:true,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});