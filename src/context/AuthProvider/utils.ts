export function setTokenLocalStorage(token: string) {
  localStorage.setItem("acc_token", token);
}

export function setRefreshTokenLocalStorage(refreshToken: string) {
  localStorage.setItem("refresh_token", refreshToken);
}

export function setProfileLocalStorage(profile: string) {
  localStorage.setItem("profile", profile);
}

export function setUserNameLocalStorage(name: string) {
  localStorage.setItem("userName", name);
}

export function setUserIdLocalStorage(id: string) {
  localStorage.setItem("userId", id);
}

export function getTokenLocalStorage() {
  const json = localStorage.getItem("acc_token");

  if (!json) {
    return null;
  }

  const token = json;

  return token ?? null;
}

export function getUserNameLocalStorage() {
  const json = localStorage.getItem("userName");

  if (!json) {
    return null;
  }

  const transactions = json;

  return transactions;
}
