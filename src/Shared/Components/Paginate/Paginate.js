import React from 'react';
import ReactPaginate from "react-paginate";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const PaginateComponent = ({ pageCount, handlePageClick }) => {
    return (
        <>
            {
                pageCount <= 10 ? null
                    : <>
                        <ReactPaginate
                            pageCount={pageCount / 10}
                            previousLabel={<IoIosArrowForward />}
                            nextLabel={<IoIosArrowBack />}
                            breakLabel={<BiDotsHorizontalRounded />}
                            breakClassName={"break-me"}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            activePageLinkClassName={"active"}
                            activeClassName={"active"}
                        />

                    </>
            }
        </>
    );
}

export default PaginateComponent;
