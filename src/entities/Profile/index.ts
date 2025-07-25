import  type { Profile,ProfileSchema } from "./model/types/profile";
import { profileActions,profileReducer } from "./model/slice/profileSlice";
import { fetchProfileData } from "./model/service/fetchDataProfile/fetchProfileData";
import ProfileCard from "./ui/ProfileCard/ProfileCard";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileIsLoading
}