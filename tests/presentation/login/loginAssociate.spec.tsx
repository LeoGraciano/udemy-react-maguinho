import { LoginAssociate } from "@/presentation/pages/login";
import { RenderResult, render } from "@testing-library/react";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<LoginAssociate />);
  return { sut };
};

describe("Login", () => {
  test("Shout call render Login Associate", () => {
    makeSut();
  });
});
