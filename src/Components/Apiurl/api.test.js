import { FetchApi } from './api.js';
import axios from 'axios';

jest.mock("axios");

test("fetching api returns from the api", async () => {
  const mockedData = { key: "value" }; //define
  axios.get.mockResolvedValue({ data: mockedData });
  const data = await FetchApi();
  expect(data).toEqual(mockedData);
});