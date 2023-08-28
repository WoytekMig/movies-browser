import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "../../images/spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: grid;
  justify-items: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 17px;
    margin-top: 24px;
  }
`;

export const StyledImg = styled(LoadingIcon)`
  margin: 120px auto 24px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.snuff};
  height: 91px;
  width: 91px;
  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    margin-top: 60px;
    width: 32px;
  }
`;
