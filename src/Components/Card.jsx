import React from 'react';
import { BsFileEarmarkText } from 'react-icons/bs';
import { MdFileDownload } from 'react-icons/md';
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    
    
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.09}} dragElastic={0.1} dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }} className="relative w-52 h-64 rounded-[50px] bg-blue-200 px-7 py-9 overflow-hidden flex-shrink-0 ">
      <BsFileEarmarkText className='font-extrabold text-lg' />
      <p className="text-sm mt-5 font-bold leading-tight">
        {data.desc}.
      </p>
      <div className={`footer absolute ${data.tag.isOpen ? 'bottom-0' : 'bottom-4'} left-0 w-full`}>
        <div className={`flex justify-between items-center mb-2 px-8 font-medium ${!data.tag.isOpen ? 'h-full flex items-end' : ''}`}>
          <h5 className="text-sm font-bold">{data.filesize}</h5>
          <span className="w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center cursor-pointer">
            {data.close ? (
              <IoMdCloseCircle size="0.9em" color="white" />
            ) : (
              <MdFileDownload size="0.9em" color="white" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full h-16 bg-[#004d00] flex justify-center items-center`}>
            <h3 className="text-[#A8E6A3] text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>

  );
}

export default Card;
