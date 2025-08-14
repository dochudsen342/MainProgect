import { StateSchema } from "app/providers/StoreProvider";

<<<<<<< HEAD
export const getProfileData = (state:StateSchema) => state.profile?.data || ''
=======
export const getProfileData = (state:StateSchema) => state?.profile?.data
>>>>>>> 8416dd9e1dfcf3d14a232353dc9ff609e99f6d75
