import { API } from "services/api";

export const axiosBaseQuery =
  ({ baseUrl, headers } = { baseUrl: "" }) =>
  async ({ url, method, params, body }) => {
    try {
      const result = await API({
        url: new URL(url, baseUrl),
        method,
        data: body,
        params,
        headers: {
          "Accept-Language": "en-US,en;q=0.9",
          ...headers,
        },
        withCredentials: true,
      });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
