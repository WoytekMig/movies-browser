import { Main } from "../../../common/Main";

import MainHeader from "../../../common/MainHeader";
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
      <MainHeader profile title={"Movies - cast (4)"} />
      <MainHeader profile title={"Movies - crew (4)"} />
    </ProfileWrapper>
  </Main>
);

export default Profile;
