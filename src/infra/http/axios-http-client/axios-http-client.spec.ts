import { HttpPostParams } from "@/data/protocols/http";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { AxiosHttpClient } from "./axios-https-client";

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

const mockPostRequst = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: mockRandomObjectPerson,
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL and verb POST", async () => {
    const request = mockPostRequst();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
