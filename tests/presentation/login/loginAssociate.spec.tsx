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
  test("Shout call test field email", () => {
    const { sut } = makeSut();
    const emailInput = sut.getByTestId("email") as HTMLInputElement;
    const fakeEmail = faker.internet.email();
    fireEvent.change(emailInput, { target: { value: fakeEmail } });
    expect(emailInput.value).toBe(fakeEmail);
  });
  test("Shout call test field password", () => {
    const { sut } = makeSut();
    const passwordInput = sut.getByTestId("password") as HTMLInputElement;
    const fakePassword = faker.internet.password();
    fireEvent.change(passwordInput, { target: { value: fakePassword } });
    expect(passwordInput.value).toBe(fakePassword);
  });
});
