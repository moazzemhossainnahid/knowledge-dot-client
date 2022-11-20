import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const GeneralTeacher = ({ instructor }) => {
  const { name, img, profession, social_link, dec } = instructor;
  return (
    <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center shadow-sm ">
      <div className="h-40 w-40">
        <img src={img} alt="t" />
      </div>
      <div className="">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm  my-4">{profession} </p>
        <div className="flex items-center gap-4 text-gray-700 mt-5 text-xl shadow-md">
          <a href={social_link.facebook} target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={social_link.twitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={social_link.pinterest} target="_blank">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href={social_link.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralTeacher;
