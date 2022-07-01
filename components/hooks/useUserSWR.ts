import useSWR from "swr";
import { users } from '@prisma/client';

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<any> => {
    console.log("url:" + url)
    const resonse = await fetch(url);
    return resonse.json();
  };
  const { data, error } = useSWR<users>(
    (typeof window !== 'undefined') ? "http://127.0.0.1:3001/api/hello" : "http://127.0.0.1:3000/api/hello",
    fetcher,
    { suspense: true }
  );
  return { data, error };
};