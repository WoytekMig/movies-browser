import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { selectIsMedia } from "../../../store";
import {
  ArrowLeft,
  ArrowRight,
  Button,
  ButtonText,
  PageCounter,
  PageNumber,
  Wrapper,
} from "./styled";

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const isMobile = useSelector(selectIsMedia);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      queryParams.set("page", newPage);
      history.push(`${location.pathname}?${queryParams.toString()}`);
    }
  };

  return (
    <Wrapper>
      <Button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
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
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumber>{currentPage}</PageNumber>
        of <PageNumber>{totalPages}</PageNumber>
      </PageCounter>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ButtonText>Next</ButtonText>
        <ArrowRight />
      </Button>
      <Button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
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
