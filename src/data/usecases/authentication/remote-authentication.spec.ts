import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { HttpPostClientSpy } from "@/data/test/mock-http-client";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { NotFoundError } from "@/domain/errors/not-found-error";
import { ServerError } from "@/domain/errors/server-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { AccountModel } from "@/domain/models/account-models";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { AuthenticationParams } from "@/domain/usecases/authentication";
import { faker } from "@faker-js/faker";
import { RemoteAuthentication } from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });
  test("Should call HttpPostClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
  test("Should trow InvalidCredentialsError if httpPostClient return 401", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
  test("Should trow UnexpectedError if httpPostClient return 400", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test("Should trow UnexpectedError if httpPostClient return 500", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new ServerError());
  });
  test("Should trow UnexpectedError if httpPostClient return 404", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new NotFoundError());
  });
});
