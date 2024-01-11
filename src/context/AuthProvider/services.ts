import Api from "../../services/Api";

export async function refreshToken() {
  const refreshTokenStorage = localStorage.getItem("refresh_token");

  try {
    const response = await Api.post(
      `/auth/refresh_token`,
      {},
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${refreshTokenStorage}`,
        },
      }
    );

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
