import styled from "styled-components";
import { ReactComponent as NoResultIcon } from "../../images/noresult.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled(NoResultIcon)`
@media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    height: 300px;
}
`;