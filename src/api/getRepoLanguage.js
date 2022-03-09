import httpService, { headers } from "../services/http.js";

export const getRepoLanguage = (languages_url) => {
  return httpService.get(
    languages_url,
    headers.Authorization && {
      headers: headers,
    }
  );
};

console.log(headers);