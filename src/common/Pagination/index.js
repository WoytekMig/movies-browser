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
  return (
    <Wrapper>
      <Button onClick={onFirstPage} disabled={currentPage === 1}>
        <ArrowLeft />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={onPrevPage} disabled={currentPage === 1}>
        <ArrowLeft />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Button>
        <PageCounter>
          Page <PageNumber>{currentPage}</PageNumber>
          of <PageNumber>{totalPages}</PageNumber>
        </PageCounter>
      </Button>
      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        <ArrowRight />
        <ButtonText>Next</ButtonText>
      </Button>
      <Button onClick={onLastPage} disabled={currentPage === totalPages}>
        <ArrowRight />
        <ButtonText>Last</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default Pagination;
