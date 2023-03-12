import { userListMock } from '../mocks/userList';
import { isNonEmptyArray, ReadonlyNonEmptyArray } from '../utils/nonEmptyArray';

export interface UserCodec {
  age: number;
  firstName: string;
  lastName: string;
  city: string;
}

export interface User {
  age: number;
  fullName: string;
}

// fake API call
const getUser = (): Promise<ReadonlyNonEmptyArray<User>> => {
  return new Promise((res, rej) => {
    const mockResponse = userListMock();

    const userList = mockResponse.map((user) => ({
      age: user.age,
      fullName: `${user.firstName} ${user.lastName}`,
    }));

    if (isNonEmptyArray(userList)) {
      return res(userList);
    }
    return rej('error');
  });
};

export const user = { get: getUser };
