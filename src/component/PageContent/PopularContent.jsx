import { use } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PopularContent = ({ CoffePromise }) => {

    const handleDelete = (_id) =>{
        console.log(_id);
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              

                fetch(`http://localhost:3000/coffe/${_id}`,{
                    method :"DELETE"

                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });



        
        
    }
  
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
                    CoffePromise.map(coffe => <div key={coffe.id} className="">
                        
                        <div className="bg-[#f3f1ee] h-[180px] rounded-2xl flex items-center justify-evenly">
                            <div className="pt-5">
                                <img className="w-[120px]" src={coffe.photo} alt="" />
                            </div>
                            <div>
                                <p><span className="text-md font-semibold">Name</span> : {coffe.name}</p>
                                <p><span className="text-md font-semibold">Cheaf</span> : {coffe.cheaf}</p>
                                <p><span className="text-md font-semibold">Price</span> : {coffe.categori}</p>
                            </div>

                            <div className="space-y-2">
                                <Link to={`/details/${coffe._id}`}> <p className="bg-[#d3b890] mb-2 cursor-pointer p-2 rounded-md text-center"><FaRegEye className="text-white text-center " /></p></Link>
                                <p className="bg-black p-2 rounded-md cursor-pointer text-center"><FaRegEdit className="text-white text-center "/></p>
                                <p className="bg-red-700 p-2 rounded-md cursor-pointer text-center"><MdDeleteForever onClick={() =>handleDelete(coffe._id)} className="text-white text-center "/></p>
                               
                            </div>
                        </div>
                        
                        
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularContent;
