import { ArrowLeft, Button, ButtonText, PageCounter, PageNumber, Wrapper } from "./styled";

const Pagination = ({currentPage, totalPages}) => {
  
  return(
  <Wrapper>
    <Button>
      <ArrowLeft />
      <ButtonText>First</ButtonText>
    </Button>
    <Button>
      <ArrowLeft />
      <ButtonText>Previous</ButtonText>
    </Button>
    <Button>
      <PageCounter>
        Page <PageNumber>{currentPage}</PageNumber>
        of <PageNumber>{totalPages}</PageNumber>
        </PageCounter>
    </Button>
    <Button>
        <ArrowLeft />
        <ButtonText>Next</ButtonText>
    </Button>
  </Wrapper>
  );
};

export default Pagination;
