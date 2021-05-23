import Book from '../components/Book'
function Header() {
    return (
        <div >
            <Book/>
            <div className="pHead h-31  xl:h-20 flex
             text-center flex-col items-center
             rounded-full bg-green-300">
                <p className="text-white mt-1 text-2xl
                 justify-center  font-bold
                 xl:text-3xl xl:font-extrabold xl:mt-2">
                 University Institute of Technology</p>

                <p className="font-bold text-sm">Notes || PYQ Papers || Youtube Videos</p>

            </div>

        </div>
    )
}

export default Header
