import axios from "axios";
import { getPersonApiUrls } from "../../../codesAPI";
import { useState, useEffect } from "react";

export const usePersonData = (personId) => {
  const [personData, setPersonData] = useState({
    status: "loading",
    person: [],
    credits: [],
  });

  const { PERSON_API_URL, CREDITS_API_URL } = getPersonApiUrls(personId);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const personResponse = await axios.get(PERSON_API_URL);
        const creditsResponse = await axios.get(CREDITS_API_URL);

        const person = personResponse.data;
        const credits = creditsResponse.data;

        setPersonData({ status: "success", person, credits });
      } catch (error) {
        console.error(error);
        setPersonData({ status: "error", person: [], credits: [] });
      }
    };

    setTimeout(fetchPersonData, 1000);
  }, [PERSON_API_URL, CREDITS_API_URL]);

  return personData;
};
