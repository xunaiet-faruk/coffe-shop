import React from 'react';

const Adcoffe = () => {
    return (
        <div>
            <div className='bg-[#f3f1ee] h-screen container mx-auto'>
                <div className='pt-12 space-y-6 mb-5'>
                    <h1 className='text-4xl font-bold text-center italic'>Add A New coffe</h1>
                    <p className='text-center w-9/12 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi voluptatem repellat nostrum accusamus, tempora neque culpa dolore rem a, incidunt porro vel, quisquam inventore fugit labore! Repudiandae, illo culpa.</p>
                </div>

                <div className='w-11/12 mx-auto '>
                    <div className='grid grid-cols-2 gap-5 mx-12'>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" className="input w-full" placeholder="Coffe Name" />
                           
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Cheaf</legend>
                            <input type="text" className="input w-full" placeholder="Cheaf Name" />
                           
                        </fieldset>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mx-12'>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Sufflier</legend>
                            <input type="text" className="input w-full" placeholder="Sufflier" />
                           
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" className="input w-full" placeholder="Taste" />
                           
                        </fieldset>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mx-12'>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Categori</legend>
                            <input type="text" className="input w-full" placeholder="Categori" />
                           
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Details</legend>
                            <input type="text" className="input w-full" placeholder="Details" />
                           
                        </fieldset>
                    </div>
                   <div className='mx-12'>
                        <fieldset className="fieldset  border-base-300 rounded-box  border ">
                            <legend className="fieldset-legend">Photo</legend>
                            <input type="text" className="input w-full" placeholder="Photo" />

                        </fieldset>
                   </div>

                   <div className='mx-12 mt-6 '>
                        <button className='btn text-white  font-bold w-full bg-[#e5b772] rounded-xl'>Add A Coffe</button>
                   </div>
                    
                </div>
           </div>
        </div>
    );
};

export default Adcoffe;