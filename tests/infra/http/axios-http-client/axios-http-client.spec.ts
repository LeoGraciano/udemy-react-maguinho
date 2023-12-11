import { AxiosHttpAdapter } from "@/infra/http/axios-http-client/axios-https-client";
import { mockPostRequest } from "@/tests/data/mock";

import axios from "axios";
import { mockAxios } from "../../mock";

jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpAdapter;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpAdapter();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test("Should call the correct statuscode and body", () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
