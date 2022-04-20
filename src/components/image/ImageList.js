import React from "react";

//rafce
const ImageList = ({images}) => 
{
    const gelenResim = images.map( image => {
           return (
             <img
               className="resim"
               key={image.id}
               src={image.urls.small}
               alt={image.alt_description}
             />
           );
        } 
    )
    return (
      <section className=" py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="container grid justify-center grid-cols-2 gap-4 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4">
          { 
              gelenResim
          }
        </div>
      </section>
    );
}
export default ImageList;