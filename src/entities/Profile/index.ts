import  type { Profile,ProfileSchema } from "./model/types/profile";
import { profileActions,profileReducer } from "./model/slice/profileSlice";
import { fetchProfileData } from "./model/service/fetchDataProfile/fetchProfileData";
<<<<<<< HEAD
=======
import ProfileCard from "./ui/ProfileCard/ProfileCard";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";
import { updateProfileData } from "./model/service/updateProfileData/uptadeProfileData";
import { getProfileValidateErrors } from "./model/selectors/getProfileValidateErrors/getProfileValidateErrors";

>>>>>>> 8416dd9e1dfcf3d14a232353dc9ff609e99f6d75
export {
    Profile,
    ProfileSchema,
    profileActions,
    profileReducer,
<<<<<<< HEAD
    fetchProfileData
=======
    fetchProfileData,
    updateProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm,
    getProfileValidateErrors,
>>>>>>> 8416dd9e1dfcf3d14a232353dc9ff609e99f6d75
}