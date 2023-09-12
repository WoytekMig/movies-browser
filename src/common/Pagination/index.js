import { useSelector } from "react-redux";
import { selectIsMedia } from "../../store";
import {
  ArrowLeft,
  ArrowRight,
  Button,
  ButtonText,
  PageCounter,
  PageNumber,
  Wrapper,
} from "./styled";

const Pagination = ({
  currentPage,
  totalPages,
  onFirstPage,
  onPrevPage,
  onNextPage,
  onLastPage,
}) => {
  const isMobile = useSelector(selectIsMedia);

  return (
    <Wrapper>
      <Button onClick={onFirstPage} disabled={currentPage === 1}>
        {isMobile ? (
          <>
            <ArrowLeft />
            <ArrowLeft />
          </>
        ) : (
          <ArrowLeft />
        )}
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={onPrevPage} disabled={currentPage === 1}>
        <ArrowLeft />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumber>{currentPage}</PageNumber>
        of <PageNumber>{totalPages}</PageNumber>
      </PageCounter>
      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        <ButtonText>Next</ButtonText>
        <ArrowRight />
      </Button>
      <Button onClick={onLastPage} disabled={currentPage === totalPages}>
        <ButtonText>Last</ButtonText>
        {isMobile ? (
          <>
            <ArrowRight />
            <ArrowRight />
          </>
        ) : (
          <ArrowRight />
        )}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
