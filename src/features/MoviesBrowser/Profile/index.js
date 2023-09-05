import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import About from "./About";
import { ProfileWrapper } from "./styled";
import { usePersonData } from "./usePersonData";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";

const Profile = () => {
  const { status, person } = usePersonData(3);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "success" && (
        <Main>
          <ProfileWrapper>
            <About
              name={person.name}
              birthdate={person.birthday}
              birthplace={person.place_of_birth}
              description={person.biography}
              picturePath={person.profile_path}
            />
          </ProfileWrapper>
          <MainHeader profile title={"Movies - cast (4)"} />
          <MainHeader profile title={"Movies - crew (4)"} />
        </Main>
      )}
    </>
  );
};

export default Profile;
