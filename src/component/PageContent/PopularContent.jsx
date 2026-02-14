import { use } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const PopularContent = ({ coffeePromise }) => {
    const coffeData = use(coffeePromise)
    console.log(coffeData);
    return (
        <div
            className="bg-cover min-h-screen    container mx-auto"
            style={{
                backgroundImage: "url('/images/more/1.png')"
            }}
        >
            <div className="  rounded-xl">
                <h1 className="text-4xl py-20 font-bold text-center italic text-orange-300">
                    Our Popular Product
                </h1>
            </div>


            <div className="container  px-32 grid grid-cols-2 gap-5 justify-center items-center">
                {
                    coffeData.map(coffe => <div key={coffe.id} className="">
                        
                        <div className="bg-[#f3f1ee] h-[180px] rounded-2xl flex items-center justify-evenly">
                            <div className="pt-5">
                                <img className="w-[120px]" src={coffe.image} alt="" />
                            </div>
                            <div>
                                <p><span className="text-md font-semibold">Name</span> : {coffe.coffeeName}</p>
                                <p><span className="text-md font-semibold">Cheaf</span> : {coffe.chef}</p>
                                <p><span className="text-md font-semibold">Price</span> : {coffe.price}</p>
                            </div>

                            <div className="space-y-2">
                                <p className="bg-[#d3b890] cursor-pointer p-2 rounded-md text-center"><FaRegEye className="text-white text-center "/></p>
                                <p className="bg-black p-2 rounded-md cursor-pointer text-center"><FaRegEdit className="text-white text-center "/></p>
                                <p className="bg-red-700 p-2 rounded-md cursor-pointer text-center"><MdDeleteForever className="text-white text-center "/></p>
                               
                            </div>
                        </div>
                        
                        
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularContent;
