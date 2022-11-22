import {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import {WhoWeHelpOneLine} from "../WhoWeHelpOneLine/WhoWeHelpOneLine";
import './WhoWeHelpPaginate.scss'

export function WhoWeHelpPaginate({getData}) {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setData(getData)
    }, [])

    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;

    const displayData = data
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(dataOne => {
            return (
                    <WhoWeHelpOneLine
                        key={dataOne.id}
                        header={dataOne.header}
                        description={dataOne.description}
                        scope={dataOne.scope}
                    />
            )
        });

    const pageCount = Math.ceil(data.length / dataPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div className={'pagination'}>
            {displayData}
            <ReactPaginate
                pageCount={pageCount}
                previousLabel={'<'}
                nextLabel={'>'}
                onPageChange={changePage}
                containerClassName={'pagination-bttns'}
                activeClassName={'pagination-active'}
            />
        </div>
    );


}