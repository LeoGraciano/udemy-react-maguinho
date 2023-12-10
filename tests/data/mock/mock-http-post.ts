import { HttpPostParams } from "@/data/protocols/http";
import { mockRandomObjectPerson } from "@/tests/infra/mock";
import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: mockRandomObjectPerson(),
});
