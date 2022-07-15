import useSWR from "swr";
import { User } from '@prisma/client';
import axios from "axios";

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    console.log("url:" + url)
    const resonse = await axios.get(url);
    return resonse.data;
  };
  
  const { data, error } = useSWR<User>(
    ((typeof window !== 'undefined') ? location.origin : process.env.API_HOST_AT_SERVER) + "/api/hello",
    fetcher,
    { suspense: true }
  );
  return { data, error };
};