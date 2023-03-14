import { AxiosPromise } from 'axios';
import api from './api';

export const getMembers = async (
  collectiveSlug: string,
  memberType: 'all' | 'users' | 'organizations',
  limit?: number,
): AxiosPromise<MemberType[]> => {
  return api.get(
    `/${collectiveSlug}/members/${memberType}.json?limit=${limit}`,
  );
};
