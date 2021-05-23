import book from '../images/book.png'
function Book() {
    return (
        <div className="mt-5 absolute w-16 h-16
        xl:left-10 xl:mb-4 xl:w-40 xl:h-40 ">
            <img src={book} alt="book" />
        </div>
    )
}

export default Book
