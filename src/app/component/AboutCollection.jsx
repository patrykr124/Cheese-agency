import React from "react";
import Image from "next/image";
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import Category from '@mui/icons-material/Category';

function AboutCollection() {
  return (
    <section id="services" className="paddingSection">
      <div className="container flex flex-col lg:flex-row justify-center align-middle items-center">
        <div className="collection_image xl:w-1/2">
          <Image
            src="image/vape.jpg"
            width={600}
            height={600}
            alt="vape men"
          ></Image>
        </div>
        <div className="collection_text lg:w-1/2 px-10">
          <h2 className=" text-3xl lg:text-8xl  mb-10 mt-10 lg:mt-0">
            Huge collection.
          </h2>
          <p className="mb-5">
            Innovative solutions to boost your creative projects.
          </p>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at
            cumque ratione corrupti cupiditate veniam explicabo magnam velit
            fugiat placeat ratione corrupti cupiditate veniam explicabo magnam
            velit fugiat placeat.
          </p>
          <div className="collection_item flex flex-col lg:flex-row gap-10 h-96">
            <div className="flex flex-col justify-center items-center item  bg-dark px-5 py-10 text-center h-3/4">
              <AutoAwesome style={{fontSize: '45px'}} className="text-6xl mb-5" ></AutoAwesome>
              <h3 className="px-2 py-2">Brand</h3>
              <p className="description">
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center item  bg-dark px-5 py-10 text-center lg:mt-28 h-3/4">
             <Category style={{fontSize: '45px'}} className="text-6xl mb-5"></Category>
              <h3 className="px-2 py-2">Collect</h3>
              <p className="description">
                Tempore corrupti temporibus fuga earum asperiores fugit
                laudantium.
              </p>
            </div>
          </div>
          <div className="collection_text mt-60 lg:mt-0 text-xs flex text-center description lg:pt-20">
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia
              sunt delectus dignissimos aut quisquam ullam cumque impedit
              ratione reiciendis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCollection;
