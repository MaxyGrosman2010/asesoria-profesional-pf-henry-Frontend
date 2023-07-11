import { useEffect, useState } from "react";
import validationReview from "./validatationReview";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { postComentario } from "../../Redux/actions";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const FormReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const [hover, setHover] = useState(null);
    const [review, setReview] = useState({
        reviewDescription: "",
        rating: null,
    });
    const [errors, setErrors] = useState({
        reviewDescription: "",
        rating: null,
    });
    useEffect(() => {
        console.log(review);
    }, [review])
    const handleChange = (event) => {
        
        setReview({
            ...review,
            [event.target.name] : event.target.value
        })
        
        setErrors(
            validationReview({
                ...review,
                [event.target.name] : event.target.value
            })
        )
        console.log(event.target.reviewDescription);
    };
    
    const handleScore = (score) => {
        setReview({
            ...review,
            rating: score,
        })
        setErrors(
            validationReview({
                ...review,
                rating: score,
            })
        )
    }

    const handleSubmitReview = (event) => {
        event.preventDefault();

        const reviewErrors = validationReview(review);
        if (Object.keys(reviewErrors).length > 0) {
            Swal.fire({
                title: 'empty fields',
                icon: 'error',
                confirm: 'acept',
            });
            return;
        }

        dispatch(postComentario(review))

        setReview({
            reviewDescription: '',
            rating: null
        })
        Swal.fire({
            title: 'Success',
            text: 'review creada!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate('/allServices');
          });
    };
    //console.log(review, "review");
    return (
    <div className="w-full bg-white h-screen flex flex-col items-center justify-center mt-20">
        <form
            onSubmit={handleSubmitReview}
            className="flex flex-col mx-auto px-10 shadow-lg p-10 w-3/4"
        >
        <span className="font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase">
            Create Review
        </span>
       
        <div className='w-full flex flex-col h-[150px] mt-10'>
            <label>Review</label>
            <textarea 
                onChange={handleChange}
                className='bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]'
                name="reviewDescription"
                value={review.reviewDescription}
            />
            {errors.message && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
              <span className='material-symbols-outlined'>error</span>
              {errors.message}
            </div>
          )}
        </div>
        <p>Tu calificacion:</p>
        <div className="flex flex-row">
            
            {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
                <label>
                <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleScore(currentRating)}

                />
                <FaStar
                    className="cursor-pointer"
                    size={30}
                    color={
                    currentRating <= (hover || review.rating) ? "#ffc107" : "e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                />
                </label>
            );
            })}
            {errors.message && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
                <span className='material-symbols-outlined'>error</span>
                {errors.message}
            </div>
            )}

        </div>
        
        
        <div className="flex">
            <button
            type="submit"
            className="shadow-lg bg-slate-900 w-[180px] h-[40px] py-1 rounded uppercase text-white font-bold mx-auto mt-10 hover:bg-gray-800"
            >
            crear
            </button>
        </div>
        </form>
    </div>
    );
};

export default FormReview;