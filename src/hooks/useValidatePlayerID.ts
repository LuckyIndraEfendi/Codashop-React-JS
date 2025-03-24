import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api-checkid-game.kimilbonchu.workers.dev/api/v1"; // Ganti sesuai API yang benar

const getPlayerUserID = async ({
  type_game,
  userId,
  aditionalInfo,
}: {
  type_game: string;
  userId: string;
  aditionalInfo: string;
}) => {
  const response = await axios.post(
    `${BASE_URL}/${type_game}`, // URL sesuai format Postman
    {
      userId,
      aditionalInfo,
    }
  );
  return response.data;
};

export const useGetPlayerUserID = () => {
  return useMutation(getPlayerUserID);
};
