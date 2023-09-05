import axios from "axios";
import { getPersonApiUrl } from "../../../codesAPI";
import { useState, useEffect } from "react";

export const usePersonData = (personId) => {
  const [personData, setPersonData] = useState({
    status: "loading",
    person: [],
  });

  const PERSON_API_URL = getPersonApiUrl(personId);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await axios.get(PERSON_API_URL);

        const person = response.data;

        setPersonData({ status: "success", person });
      } catch (error) {
        console.error(error);
        setPersonData({ status: "error", person: [] });
      }
    };

    setTimeout(fetchPersonData, 1000);
  }, [PERSON_API_URL]);

  return personData;
};
