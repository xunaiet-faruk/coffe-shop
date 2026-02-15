import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import PopularContent from './PopularContent';
import { useLoaderData } from 'react-router-dom';

const Allcontent = () => {

    const CoffePromise =useLoaderData()
    console.log(CoffePromise);
    return (
        <div>
            <Banner/>
            <Suspense fallback={<h1>Data Is Comming.................</h1>}>
                <PopularContent CoffePromise={CoffePromise}/>
            </Suspense>
        </div>
    );
};

export default Allcontent;