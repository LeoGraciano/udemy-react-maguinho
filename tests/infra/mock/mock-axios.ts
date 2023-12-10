import { faker } from "@faker-js/faker";
import axios from "axios";

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

export const mockRandomObjectPerson = (): RandomObject => {
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

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: mockRandomObjectPerson(),
    status: faker.internet.httpStatusCode(),
  });
  return mockedAxios;
};
