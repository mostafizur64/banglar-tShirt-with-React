import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirt = useLoaderData();
    return (
        <div>
            this is home page!!=={tShirt.length}
        </div>
    );
};

export default Home;