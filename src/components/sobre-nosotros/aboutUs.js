import { fetchStrapi } from '@/utils/functions';
import React from 'react';

  const AboutUs = async ({idioma}) => {
    const data= await fetchStrapi('paginas', idioma,'');
    const title= data.data[0]?.attributes.about.title;
    const content= data.data[0]?.attributes.about.content;
    return (
        <div className="flex flex-col items-center justify-center bg-blue-500 m-0 mb-2">
            <main className="flex flex-col p-4 items-center justify-center text-center">
                <h1 className="text-4xl text-white bold">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-white p-4">
                    {content}
                </p>
            </main>
        </div>
    );
}

export default AboutUs;
