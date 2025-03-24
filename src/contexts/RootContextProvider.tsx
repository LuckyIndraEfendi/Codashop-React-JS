/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetPlayerUserID } from "@/hooks/useValidatePlayerID";
import { PlayerData } from "@/types/productListType";
import { RootContextType, UserDataInput } from "@/types/userIdType";
import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const useRootLayout = () => {
  return useContext(RootContext);
};

// Ubah createContext agar sesuai dengan tipe yang diberikan
export const RootContext = createContext<RootContextType>({
  userDataInput: { userId: "", aditionalInfo: "" },
  dataUserID: {} as PlayerData,
  isLoadingUserID: false,
  handleInputChange: () => {},
  handleValidateCheckUserID: () => {},
});
const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: dataUserID,
    isLoading: isLoadingUserID,
    mutate,
  } = useGetPlayerUserID();
  const [userDataInput, setUserDataInput] = useState<UserDataInput>({
    userId: "",
    aditionalInfo: "",
  });

  const handleValidateCheckUserID = () => {
    console.log(userDataInput);
    mutate({
      type_game: "free-fire", // Ganti sesuai kebutuhan
      userId: userDataInput?.userId,
      aditionalInfo: userDataInput?.aditionalInfo,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <RootContext.Provider
      value={{
        userDataInput,
        dataUserID,
        isLoadingUserID,
        handleInputChange,
        handleValidateCheckUserID,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
