import { styled } from "styled-components";
import { ReactComponent as Icon } from "../../../images/search.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  outline-offset: 10px;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  width: 432px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 33px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-content: center;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    height: 40px;
    width: 90vw;
    display: grid;
    align-items: center;
  }
`;

export const StyledInput = styled.input`
  border-radius: 33px;
  border: none;
  font-size: 16px;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 13px;
  }

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
      font-size: 13px;
    }
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(Icon)`
  width: 18px;
  height: 19px;
  display: grid;
  justify-self: center;
  margin: 0 0 0 18px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    width: 16px;
    height: 16px;
  }
`;
