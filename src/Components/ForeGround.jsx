import React, { useRef } from 'react';
import Card from './Card';

const ForeGround = () => {
    const foreground = useRef(null)
  const data = [
    {
      desc: 'This is a sample description of the file that will be displayed..',
      filesize: '.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Download Now' },
    },
    {
      desc: 'This is a sample description of the file that will be displayed ..',
      filesize: '.9mb',
      close: false,
      tag: { isOpen: false, tagTitle: 'Download Now' },
    },
    {
      desc: 'This is a sample description of the file that will be displayed..',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Upload', },
    },
  ];

  return (
    <div ref={foreground} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => {
        return <Card  data={item} className={item.tag.tagColor} reference = {foreground} />;
      })}
    </div>
  );
};

export default ForeGround;
