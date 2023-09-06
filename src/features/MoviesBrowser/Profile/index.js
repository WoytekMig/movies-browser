import { Main } from "../../../common/Main";
import About from "./About";
import { ProfileWrapper } from "./styled";
import { usePersonData } from "./usePersonData";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { useSelector } from "react-redux";
import { selectPersonId } from "../moviesSlice";
import MoviesList from "../../../common/MoviesList";
import MainHeader from "../../../common/MainHeader";

const Profile = () => {
  const personId = useSelector(selectPersonId);

  const { status, person, credits } = usePersonData(personId);

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

            <MainHeader title={`Movies - cast (${credits.cast.length})`} />
            <MoviesList moviesData={credits.cast} />
            <MainHeader title={`Movies - crew (${credits.crew.length})`} />
            <MoviesList moviesData={credits.crew} />
          </ProfileWrapper>
        </Main>
      )}
    </>
  );
};

export default Profile;
