import { ValidatorMessageError } from "@/presentation/protocols/validation";
import { useEffect, useMemo, useState } from "react";

export const UseEmailInputValidator = (
  email: string
): ValidatorMessageError => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = useMemo(
    () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    []
  );

  useEffect(() => {
    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage("Email não é valido");
    } else {
      setError(false);
      setErrorMessage("");
    }
  }, [email, emailRegex]);

  return { error, errorMessage };
};
