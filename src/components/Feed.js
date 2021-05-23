import Card from '../components/Card'
import notes from '../images/notes.png'
import pyq from '../images/pyq.png'
import yt from '../images/yt.png'

const val = [
    {
        id: 1,
        name: "Notes",

        src: notes,
        msg: "Get the Section wise Notes ."
    },
    {
        id: 2,
        name: "PYQ",

        src: pyq,
        msg: "Previous Year Question paper of UIT."
    },
    {
        id: 3,
        name: "Video Lectures",

        src: yt,
        msg: "Videos and Playlist for each topic."
    },

];

    
function Feed() {
    function createBubble(){
        const section = document.querySelector('section')
        const createElement = document.createElement('span')
        var size = Math.random() * 60;
        
        createElement.style.width = 50 + size + 'px';
        createElement.style.height = 50 + size + 'px';
        createElement.style.left = Math.random() *  document.documentElement.clientWidth+ "px";
        section.appendChild(createElement);
        setTimeout(() =>{
            createElement.remove()
    
        },4000)
    }
    setInterval(createBubble, 500);
    
    return (
        <>
        <section>
            
            </section>
        <div className="main   top-52 space-y-5  w-screen h-5/6 flex-col
           xl:w-10/12
         xl:h-4/6 xl:top-36 xl:space-y-0 xl:flex-row xl:ml-14 xl:mt-2
          relative  flex  items-center" >
            {val.map(card => (

                <Card
                    key={card.src}
                    name={card.name}
                    src={card.src}
                    msg={card.msg}
                />


            ))}
            

        </div>
        
        </>
    )
}

export default Feed
