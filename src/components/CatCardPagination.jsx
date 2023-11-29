import React, { useState } from "react";
import CatCard from "./CatCard/CatCard";
import './CatCardPagination.css'

const CatCardPagination = ({ cardsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;
  console.log(typeof cardsData);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="catCardContainer">
      <div className="cards">
        {currentCards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </div>
      <div className="pagination">
        
        {Array.from(
          { length: Math.ceil(cardsData.length / cardsPerPage) },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <span key={pageNumber} onClick={() => paginate(pageNumber)}>
            {pageNumber}
          </span>
        ))} 
      </div>
    </div>
  );
};

export default CatCardPagination;
