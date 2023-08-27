import { getAllUsers } from "./get";

const USER_DATA = [
  {
    id: 1,
    email: "email@email.com",
  },
  {
    id: 2,
    email: "email@email.com",
  },
  {
    id: 3,
    email: "email@email.com",
  },
];

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

global.fetch = mockFetchSuccess;

describe("getAllUsers", () => {
  it("returns an array of users", async () => {
    const data = await getAllUsers();
    expect(data).toEqual(USER_DATA);
  });
});
