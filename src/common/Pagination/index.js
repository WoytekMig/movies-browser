import { useMoviesData } from "../../features/MoviesBrowser/MoviesList/useMoviesData";
import {
  ArrowLeft,
  ArrowRight,
  Button,
  ButtonText,
  PageCounter,
  PageNumber,
  Wrapper,
} from "./styled";
import { useState } from "react";

const totalPages = 500;

const Pagination = () =>
  /*  currentPage,  */
  /* hookYouNeed, */
  /* totalPages,
onFirstPage,
onPrevPage,
onNextPage,
onLastPage, */ {
    const [currentPage, setCurrentPage] = useState(1);

    const moviesData = useMoviesData(currentPage);
    console.log(moviesData.status);

    const onFirstPage = () => {
      const newPage = 1;
      setCurrentPage(newPage);
    };

    const onPrevPage = () => {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
    };

    const onNextPage = () => {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    };

    const onLastPage = () => {
      const newPage = 500;
      setCurrentPage(newPage);
    };

    return (
      <Wrapper>
        <Button onClick={onFirstPage} disabled={currentPage === 1}>
          <ArrowLeft /> <ArrowLeft />
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
          <ArrowRight />
          <ArrowRight />
        </Button>
      </Wrapper>
    );
  };

export default Pagination;
