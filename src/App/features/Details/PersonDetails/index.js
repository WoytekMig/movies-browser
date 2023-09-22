import { Main } from "../../../common/Main";
import About from "./About";
import { ProfileWrapper } from "./styled";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import MoviesList from "../../../common/MoviesList";
import MainHeader from "../../../common/MainHeader";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  fetchPersonDataById,
  selectPersonData,
} from "../../Details/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonDataById(id));
  }, [id, dispatch]);

  const { person, credits, status } = useSelector(selectPersonData);

  const modifiedBirthday = person.birthday
    ? person.birthday.split("-").reverse().join(".")
    : "";

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "success" && (
        <Main>
          <ProfileWrapper>
            <About
              name={person.name}
              birthdate={modifiedBirthday}
              birthplace={person.place_of_birth}
              description={person.biography}
              picturePath={person.profile_path}
            />
            {credits.cast.length !== 0 && (
              <MainHeader title={`Movies - cast (${credits.cast.length})`} />
            )}
            <MoviesList profile moviesData={credits.cast} />
            {credits.crew.length !== 0 && (
              <MainHeader title={`Movies - crew (${credits.crew.length})`} />
            )}
            <MoviesList profile moviesData={credits.crew} />
          </ProfileWrapper>
        </Main>
      )}
    </>
  );
};

export default Profile;
