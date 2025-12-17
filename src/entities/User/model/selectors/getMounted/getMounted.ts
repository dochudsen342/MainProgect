import { StateSchema } from '@/app/providers/StoreProvider'

export const getMounted = (state: StateSchema) => state?.user?._mounted
