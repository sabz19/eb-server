import axios from "axios";
import { URL } from "url";

function token() {
  return process.env.token;
}

export async function request(url: URL, type: string): Promise<Object> {
  let config: Object = {};

  if (type === "EB") {
    config = {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    };
  }
  
  axios
    .get(url.toString(), config)
    .then((response) => {
      console.error(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('error = ',error);
    });

  return {};
}
