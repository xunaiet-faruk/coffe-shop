import React from 'react';
import Swal from 'sweetalert2';

const Adcoffe = () => {
    const handleAdd =e=>{
        e.preventDefault();
        const name =e.target.name.value;
        const cheaf =e.target.cheaf.value;
        const sufflier = e.target.sufflier.value;
        const taste = e.target.taste.value;
        const categori = e.target.categori.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const Allcontent ={name,cheaf,sufflier,taste,categori,details,photo}
        fetch('http://localhost:3000/coffe',{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body :JSON.stringify(Allcontent)
        })
        .then(res => res.json())
        .then(data => 
        {
            if (data.insertedId){
                Swal.fire({
                    title: "Cofee Added!",
                    icon: "success",
                    draggable: true
                });
                console.log(data);
            }
        }
        )
    }
    return (
        <div>
            <div className='bg-[#f3f1ee] h-[600px] container mx-auto'>
                <div className='pt-12 space-y-6 mb-5'>
                    <h1 className='text-4xl font-bold text-center italic'>Add A New coffe</h1>
                    <p className='text-center w-9/12 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi voluptatem repellat nostrum accusamus, tempora neque culpa dolore rem a, incidunt porro vel, quisquam inventore fugit labore! Repudiandae, illo culpa.</p>
                </div>

                <div className='w-11/12 mx-auto '>
                   <form onSubmit={handleAdd} action="">

                        <div className='grid grid-cols-2 gap-5 mx-12'>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" className="input w-full" name='name' placeholder="Coffe Name" />

                            </fieldset>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Cheaf</legend>
                                <input type="text" className="input w-full" name='cheaf' placeholder="Cheaf Name" />

                            </fieldset>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mx-12'>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Sufflier</legend>
                                <input type="text" className="input w-full" name='sufflier' placeholder="Sufflier" />

                            </fieldset>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Taste</legend>
                                <input type="text" className="input w-full" name='taste' placeholder="Taste" />

                            </fieldset>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mx-12'>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Categori</legend>
                                <input type="text" className="input w-full" name='categori' placeholder="Categori" />

                            </fieldset>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Details</legend>
                                <input type="text" className="input w-full" name='details' placeholder="Details" />

                            </fieldset>
                        </div>
                        <div className='mx-12'>
                            <fieldset className="fieldset  border-base-300 rounded-box  border ">
                                <legend className="fieldset-legend">Photo</legend>
                                <input type="text" className="input w-full" name='photo' placeholder="Photo" />

                            </fieldset>
                        </div>

                        <div className='mx-12 mt-6 '>
                            <button className='btn text-white  font-bold w-full bg-[#e5b772] rounded-xl'>Add A Coffe</button>
                        </div>


                   </form>
                    
                </div>
           </div>
        </div>
    );
};

export default Adcoffe;