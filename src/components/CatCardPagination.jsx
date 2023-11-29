import { useState } from "react";
import CatCard from "./catCard/CatCard.jsx";
import "./CatCardPagination.css";

const CatCardPagination = ({ cardsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="catCardContainer">
      <div className="cards">
        {currentCards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
};

export default CatCardPagination;
