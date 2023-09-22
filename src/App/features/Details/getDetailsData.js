import axios from "axios";
import { getDetailsApiUrls } from "../../common/Helpers/codesAPI";

const getDetailsData = async (id, type) => {
  const { DETAILS_API_URL, CREDITS_API_URL } = getDetailsApiUrls(id, type);

  const detailsResponse = await axios.get(DETAILS_API_URL);
  const creditsResponse = await axios.get(CREDITS_API_URL);

  const details = detailsResponse.data;
  const credits = creditsResponse.data;

  return { details, credits };
};

export { getDetailsData };
