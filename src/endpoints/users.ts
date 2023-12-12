import { API_ENDPOINT } from "@constants/global";
import { getFromCacheOrServer } from "@root/endpoints/dataFetching";

const USERS_BASE_URL = `${API_ENDPOINT}/users`;

const fetchUser = <T>(id: number) =>
  getFromCacheOrServer<T>(`${USERS_BASE_URL}/${id}`);

export { fetchUser };
