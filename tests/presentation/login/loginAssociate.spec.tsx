import { LoginAssociate } from "@/presentation/pages/login";
import { render } from "@testing-library/react";

describe("Login", () => {
  test("Shout call render Login Associate", () => {
    render(<LoginAssociate />);
  });
});
