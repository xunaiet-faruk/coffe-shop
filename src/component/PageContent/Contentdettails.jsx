import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Contentdettails = () => {
    const coffee = useLoaderData();

    return (
        <div className="min-h-screen flex justify-center items-center p-10">
            <div className="   max-w-4xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={coffee.photo}
                        alt={coffee.name}
                        className="w-full max-w-sm rounded-xl "
                    />
                </div>

                {/* Info Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-brown-800">
                        {coffee.name}
                    </h1>

                    <p className="text-lg">
                        <span className="font-semibold">Chef:</span> {coffee.cheaf}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold">Supplier:</span> {coffee.sufflier}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold">Taste:</span> {coffee.taste}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold">Category / Price:</span> ${coffee.categori}
                    </p>

                    <div className="pt-4">
                        <h3 className="text-xl font-semibold mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {coffee.details}
                        </p>
                    </div>

                    <Link to="/">
                        <button className="mt-6 bg-[#d3b890] hover:bg-[#bfa27b] text-white px-6 py-3 rounded-lg font-semibold transition">
                            ← Back to Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Contentdettails;
