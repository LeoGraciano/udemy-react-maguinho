import { HttpPostParams } from "@/data/protocols/http";
import { AxiosHttpAdapter } from "@/infra/http/axios-http-client/axios-https-client";
import { faker } from "@faker-js/faker";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

interface RandomObject {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  phone: string;
}

const mockRandomObjectPerson = (): RandomObject => {
  const newRandomObject = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    phone: faker.phone.number(),
  };
  return newRandomObject;
};

const mockedAxiosResult = {
  data: mockRandomObjectPerson(),
  status: faker.internet.httpStatusCode(),
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpAdapter => {
  return new AxiosHttpAdapter();
};

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: mockRandomObjectPerson(),
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test("Should call the correct statuscode and body", async () => {
    const sut = makeSut();
    const httpResponse = await sut.post(mockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
