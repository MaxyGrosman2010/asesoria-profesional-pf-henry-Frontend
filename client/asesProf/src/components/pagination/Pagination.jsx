
import { useSelector } from 'react-redux'

const Pagination = ({max, page, setPage}) => {

    const data = useSelector((state) => state.copyState)
    console.log(data, 'desde Pagination');

    const handlePrevPage = () => {
        if(page < 2) return;
        setPage(page - 1)
    }
    
    const handleNextPage = () => {
        setPage(page + 1)
    }

    return (
    <div className="flex gap-10 mx-auto">
        <button onClick={handlePrevPage} className="bg-green-300 w-[100px] py-2 my-20">prev</button>
        <p className="mt-20 py-2 w-[100px] text-center">{page}</p>
        <button disabled={page >= max} onClick={handleNextPage} className="bg-green-300 w-[100px] py-2 my-20">next</button>
    </div>
  )
}

export default Pagination