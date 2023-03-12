import { ReadonlyNonEmptyArray } from "../utils/nonEmptyArray";
import { UserCodec } from "../web/user";

export const userListMock = (): ReadonlyNonEmptyArray<UserCodec> => [
  {
    age: 30,
    firstName: "John",
    lastName: "Doe",
    city: "New York",
  },
  {
    age: 35,
    firstName: "Bill",
    lastName: "Smith",
    city: "London",
  },
];
