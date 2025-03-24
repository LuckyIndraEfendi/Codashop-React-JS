import { PlayerData } from "./productListType";

export interface UserDataInput {
  userId: string;
  aditionalInfo: string;
}

export interface RootContextType {
  userDataInput: UserDataInput;
  dataUserID: PlayerData;
  setUserDataInput?: React.Dispatch<React.SetStateAction<UserDataInput>>;
  isLoadingUserID: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValidateCheckUserID: () => void;
}
