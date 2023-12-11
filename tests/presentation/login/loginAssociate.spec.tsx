import { LoginAssociate } from "@/presentation/pages/login";
import { faker } from "@faker-js/faker";
import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<LoginAssociate />);
  return { sut };
};

describe("Login", () => {
  afterEach(cleanup);
  test("Shout call render Login Associate", () => {
    makeSut();
  });
  test("Shout call test fields and valid", () => {
    const { sut } = makeSut();
    const emailInput = sut.getByTestId("email");
    const passwordInput = sut.getByTestId("password");
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    });
  });
});
