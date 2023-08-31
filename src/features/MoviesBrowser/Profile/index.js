import { Main } from "../../../common/Main";
import About from "./About";
import { ProfileWrapper } from "./styled";

const Profile = ({ birthdate, birthplace, desciption }) => (
  <Main>
    <ProfileWrapper>
      <About
        birthdate={birthdate}
        birthplace={birthplace}
        desciption={desciption}
      />
    </ProfileWrapper>
    {/* This section will be adjusted in the future

    <MainHeader profile title={"Movies - cast (4)"} />
    <MoviesList />
    <MainHeader profile title={"Movies - crew (4)"} />
    <MoviesList /> */}
  </Main>
);

export default Profile;
