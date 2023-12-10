import { HttpPostParams } from "@/data/protocols/http";
import axios from "axios";

export class AxiosHttpClient<T> {
  async post(params: HttpPostParams<T>): Promise<void> {
    await axios(params.url);
  }
}
