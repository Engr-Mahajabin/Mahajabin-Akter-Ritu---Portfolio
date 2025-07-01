import React from 'react';

const SectionTitles = ({ heading, subHeading }) => {
    return (
        <div className='w-full md:w-6/12 mx-auto text-white text-center'>
            <p className='pt-12'>{subHeading}</p>
            <h3 className='text-3xl text-blue-400 uppercase font-bold pt-4'>{heading}</h3>
            <p className='pt-4'>_________</p>
        </div>
    );
};

export default SectionTitles;