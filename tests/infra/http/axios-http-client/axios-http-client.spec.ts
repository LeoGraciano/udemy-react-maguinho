import { HttpPostParams } from "@/data/protocols/http";
import { AxiosHttpClient } from "@/infra/http/axios-http-client/axios-https-client";
import { faker } from "@faker-js/faker";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

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

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: mockRandomObjectPerson,
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
});
