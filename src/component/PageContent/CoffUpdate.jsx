import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = () => {
   

    const { name, photo, cheaf, details, sufflier, taste, _id, categori} =useLoaderData()
  
    const navigate =useNavigate()
  

    const handleSubmit = (e) => {
        e.preventDefault();
   
        const name = e.target.name.value;
        const cheaf = e.target.cheaf.value;
        const sufflier = e.target.sufflier.value;
        const taste = e.target.taste.value;
        const categori = e.target.categori.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const updateData = { name, cheaf, sufflier, taste, categori, details, photo }
        console.log( updateData);

        fetch(`http://localhost:3000/coffe/${_id}`,{

            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(updateData)

        }).then(res => res.json())
            .then(data => {
                console.log("Server Response:", data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated!",
                        text: "Coffee updated successfully ☕",
                        timer: 1500,
                        showConfirmButton: false
                    });

                    setTimeout(() => {
                        navigate('/');
                    }, 1600);
                }
            });

    };

    return (
        <div className="min-h-screen flex items-center mt-12 justify-center bg-base-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl space-y-4"
            >
                <h2 className="text-2xl font-bold text-center mb-4">
                    Update Coffee Info ☕
                </h2>

                

                {/* Name */}
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                                       className="input input-bordered w-full"
                    />
                </div>

                {/* Cheaf */}
                <div>
                    <label className="block mb-1">Cheaf</label>
                    <input
                        type="text"
                        name="cheaf"
                        defaultValue={cheaf}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Sufflier */}
                <div>
                    <label className="block mb-1">Sufflier</label>
                    <input
                        type="text"
                        name="sufflier"
                        defaultValue={sufflier}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Taste */}
                <div>
                    <label className="block mb-1">Taste</label>
                    <input
                        type="text"
                        name="taste"
                        defaultValue={taste}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1">Category</label>
                    <input
                        type="text"
                        name="categori"
                        defaultValue={categori}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Details */}
                <div>
                    <label className="block mb-1">Details</label>
                    <textarea
                        name="details"
                        defaultValue={details}
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                {/* Photo URL */}
                <div>
                    <label className="block mb-1">Photo URL</label>
                    <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Image Preview */}
                <div className="flex justify-center mt-4">
                    <img
                        
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg border"
                        src={photo}
                    />
                </div>

                {/* Submit */}
                <button className="btn btn-primary w-full mt-4">
                    Update Coffee ☕
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
