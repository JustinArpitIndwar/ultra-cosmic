export default function HomePage(){
    return(
        <>
        <div className="flex justify-around p-20 ">


            <div className="bg-red-500 min-h-[10rem] basis-1/3">
                
            </div>
            <div className=" min-h-[10rem] basis-1/3 text-center p-5">
                <div className="text-3xl font-semibold">Let's get Quakin'</div>
                <div className="mt-10 text-lg">Your go-to site for creating coding quizzes quickly, efficiently and without any hassle. </div>
                <button className="mt-10 text-lg bg-yellow-400 text-black px-3 py-1 rounded-full">Get Started</button>
            </div>
        </div>



        <div className="flex flex-row-reverse justify-around p-20 my-36 ">

        <div className="bg-red-500 min-h-[10rem] basis-1/3">
            
        </div>
        <div className=" min-h-[10rem] basis-1/3 text-right p-5">
            <div className="text-3xl font-semibold">Start Exploring</div>
            <div className="mt-10 text-lg">Directly go to our contest page to see what you are getting your self into🤭. </div>
            <button className="mt-10 text-lg bg-yellow-400 text-black px-3 py-1 rounded-full">Explore</button>
        </div>
        </div>

        <div className="text-center ">
            <div className="text-3xl font-semibold text-center">Top Contributors</div>
            <div className="min-h-[15rem] mt-5"></div>
        </div>
        </>
    )
}