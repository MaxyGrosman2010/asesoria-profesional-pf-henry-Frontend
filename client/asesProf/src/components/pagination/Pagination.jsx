import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from "react-redux"


const Pagination = () => {
    
    const copyState = useSelector((state) => state.copyState)

    const [currentItem, setCurrentItem] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [itemsOffset, setItemOffset] = useState(0)
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffeset = itemsOffset + itemsPerPage 
        setCurrentItem(copyState.slice(itemsOffset, endOffeset))
        setPageCount(Math.ceil(copyState.length / itemsPerPage))
    }, [copyState, itemsOffset, itemsPerPage])
     
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % copyState.length
        setItemOffset(newOffset)
    }


  return (
    
        <div className="flex">
            <ReactPaginate
            className='flex gap-5 my-10'
            pageCount={pageCount}
            breakLabel='...'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            />
        </div>
    
  )
}

export default Pagination




