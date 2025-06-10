import axios from 'axios';


export const getData = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url);
  return await res.data;
}