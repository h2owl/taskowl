import useSWR from "swr";
import { users } from '@prisma/client';

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    console.log("url:" + url)
    const resonse = await fetch(url);
    return resonse.json();
  };
  
  const { data, error } = useSWR<users>(
    ((typeof window !== 'undefined') ? location.origin : process.env.API_HOST_AT_SERVER) + "/api/hello",
    fetcher,
    { suspense: true }
  );
  return { data, error };
};