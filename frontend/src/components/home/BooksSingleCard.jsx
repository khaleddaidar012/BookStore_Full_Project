import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight  } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';


const BookSingleCard = ({book}) =>{

    return (
        <div
        key={book._id}
        className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
            {book.publishYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{book._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justifiy-start item-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.author}</h2>
            </div>

        <div className='flex justify-between items-center gap-x-2 p-4'>
            <Link to={`/books/delails/${book._id}`} >
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
            </Link>
            <Link to={`/books/edit/${book._id}`} >
                        < AiOutlineEdit className='text-2xl text-blue-800 hover:text-black' />
            </Link>
            <Link to={`/books/delete/${book._id}`} >
                        < MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
            </Link>


        </div>


    </div>
    )
}
export default BookSingleCard