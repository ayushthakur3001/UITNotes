
function Quote() {
    window.addEventListener('onload', function (){

        let btn = document.getElementById('btn');
        let output = document.getElementById('output');
        let quote = [
            '"All limitations are self-imposed."                                            – Oliver Wendell Holmes',
            '"Tough times never last but tough people do."                                      – Robert H. Schiuller',
            '"Problems are not stop signs, they are guidelines."                                           – Robert H. Schiuller',
            '"One day the people that don’t even believe in you will tell everyone how they met you."                                    – Johnny Depp',
            '"If I’m gonna tell a real story, I’m gonna start with my name."                                           – Kendrick Lamar',
            '"If you tell the truth you don’t have to remember anything."                                           – Mark Twain',
            '"Have enough courage to start and enough heart to finish."                                           – Jessica N. S. Yourko',
            '"Hate comes from intimidation, love comes from appreciation."                                           – Tyga',
            '"I could agree with you but then we’d both be wrong."                                           – Harvey Specter',
            '"Oh, the things you can find, if you don’t stay behind."                                           – Dr. Seuss',

        ];

        btn.addEventListener('click', function () {
            var randomQuoate = quote[Math.floor(Math.random() * quote.length)]
            output.innerHTML = randomQuoate;
        })
        
    })
   
    
    
    return (
        <div >
            <div className="  flex flex-col  absolute text-white
            mt-2  w-300 h-20 xl:h-14 
             xl:w-105 md:ml-40 xl:right-40 xl:left-40  rounded-md bg-gray-800   " >
                <div>
                    <p id="output" className="sm:text-sm xl:mt-4 xl:ml-2">"Great ideas often receive violent opposition from mediocre minds. – Albert Einstein"</p>
                    <button id="btn" className="absolute rounded-md text-sm
                    w-30 h-5 transform
                    text-center
                    right-5 
                    xl:text-center
                    bg-white 
                    xl:flex-row
                    xl:btns
                    xl:cursor-pointer
                    xl:w-20
                    xl:mr-19
                    xl:h-5
                    text-black
                    hover:scale-105">New Quote</button>

                </div>
                

            </div>
        </div>
        

    )
    
}

export default Quote
