import axios from "axios";
import { getPersonApiUrls } from "../common/ApiUrls";

const getPerson = async (personId) => {
  const { PERSON_API_URL, CREDITS_API_URL } = getPersonApiUrls(personId);

  const personResponse = await axios.get(PERSON_API_URL);
  const creditsResponse = await axios.get(CREDITS_API_URL);

  const person = personResponse.data;
  const credits = creditsResponse.data;

  const personData = { person, credits };

  return personData;
};

export { getPerson };
