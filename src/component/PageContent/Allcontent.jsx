import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import PopularContent from './PopularContent';

const Allcontent = () => {

    const coffeePromise = fetch("/coffe.json").then(res => res.json());
    return (
        <div>
            <Banner/>
            <Suspense fallback={<h1>Data Is Comming.................</h1>}>
                <PopularContent coffeePromise={coffeePromise}/>
            </Suspense>
        </div>
    );
};

export default Allcontent;