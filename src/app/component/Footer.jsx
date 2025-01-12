import React from "react";
import Image from "next/image";
import FmdGood from '@mui/icons-material/FmdGood';
import Email from '@mui/icons-material/Email';
import LocalPhone from '@mui/icons-material/LocalPhone';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer_section w-full paddingSection flex justify-center  bg-dark">
      <div className="container">
        <div className="boxs flex flex-col lg:flex-row px-10 lg:px-0 gap-10 justify-center">
          <div className="contact_box mr-10 ">
            <h3 className="contact_title font-bold mb-10 text-2xl">
              Contact us
            </h3>
            <div className="contact_icon ">
              <div className="local_box flex mb-5">
                <div className="adres_icon flex mr-5 ">
                 <FmdGood style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></FmdGood>
                </div>
                <div className="adress_text">
                  <h4 className="font-bold mb-1 text-xl">Officeal Address</h4>
                  <p className="addres_description text-gray-400">
                    504 White St . Dawsonville, GA 30534 ,<br />
                    New York
                  </p>
                </div>
              </div>

              <div className="email_icon">
                <div className="email_box flex mb-10">
                  <div className="email_icon flex mr-5">
                    <Email style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></Email>
                  </div>
                  <div className="email_text">
                    <h4 className="font-bold mb-1 text-xl">Email Us</h4>
                    <p className="email_description text-gray-400"><a href="mailto:support@gmail.com">
                      support@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="phone_icon">
                  <div className="phone_box flex mb-5">
                    <div className="phone_icon flex mr-5 ">
                      <LocalPhone style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></LocalPhone>
                    </div>
                    <div className="phone_text">
                      <h4 className="font-bold mb-1 text-xl">Call Us</h4>
                      <p className="phone_description text-gray-400">
                        <a href="tel:+879864516667"> +87986451666</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recent_box flex flex-col">
            <h3 className="font-bold mb-10 text-2xl">Recent News</h3>
            <div className="recent_container">
              <div className="recent_item flex mb-10">
                <div className="recent_img_box pr-10">
                  <Image
                    className="recent_img"
                    src="image/carouzel3.jpg"
                    width={100}
                    height={100}
                    alt="vape men"
                  ></Image>
                </div>
                <div className="recent_text overflow-hidden w-1/2">
                  <p className="recent_description mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing!
                  </p>
                  <span className="recent_span text-sm  text-gray-400">
                    <a className="action recent_link" href="#">
                      2024.01.01
                    </a>
                  </span>
                </div>
              </div>

              <div className="recent_item flex">
                <div className="recent_img_box pr-10">
                  <Image
                    className="recent_img"
                    src="image/carouzel6.jpg"
                    width={100}
                    height={100}
                    alt="vape men"
                  ></Image>
                </div>
                <div className="recent_text overflow-hidden w-1/2">
                  <p className="recent_description mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing!
                  </p>
                  <span className="recent_span text-sm  text-gray-400">
                    <a className="action recent_link" href="#">
                      2024.01.01
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="CheeseAgency_box">
            <h3 className="cheese_title font-bold mb-10 text-2xl">Social media</h3>

            <div className="cheese_container">
              <div className="cheese_icon flex justify-between mb-10">
                <Facebook style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></Facebook>
                <Instagram style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></Instagram>
                <Twitter style={{fontSize: '35px'}} className="text-4xl cursor-pointer"></Twitter>
              </div>
              <div className="privacy_box overflow-hidden flex flex-col gap-5">
                <span className="recent_span text-sm  text-gray-400">
                  <a className="recent_link" href="#">
                    PRIVACY POLICY
                  </a>
                </span>

                <span className="recent_span text-sm  text-gray-400">
                  <a className="recent_link" href="#">
                    TERMS AND CONDITIONS
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
