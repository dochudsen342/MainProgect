import  type { Profile,ProfileSchema } from "./model/types/profile";
import { profileActions,profileReducer } from "./model/slice/profileSlice";
import { fetchProfileData } from "./model/service/fetchDataProfile/fetchProfileData";
export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData
}