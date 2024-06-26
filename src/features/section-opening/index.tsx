'use client';

/* eslint-disable import/extensions */

import Image from 'next/image';
import Label from '@/components/Label';
import ProfileImage from '@/assets/images/profile.png';
import Button from '@/components/button';
import Banner from '@/assets/images/banner.jpg';
import { useGetSectionOpening } from './hooks/get-data';

const SectionOpeningFeature = () => {
  const { data: sectionOptionData, isLoading } = useGetSectionOpening();

  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Banner.src})` }}
    >
      <div className="container h-[calc(100vh-80px)] flex items-center justify-between bg-cover">
        <div className="flex flex-col gap-y-4">
          {!isLoading && (
            <>
              <Label className="text-[#c1ff22] text-xl animate-slide-to-bottom-delay animation-duration-[0.5s]">
                {sectionOptionData?.data?.small_title}
              </Label>
              <Label className="text-6xl text-white animate-slide-to-bottom-delay animation-duration-[1s]">
                {sectionOptionData?.data?.title}
              </Label>
              <p className="text-lg text-white animate-slide-to-bottom-delay animation-duration-[1.5s]">
                {sectionOptionData?.data?.description}
              </p>
              <div className="mt-5 animate-slide-to-bottom-delay animation-duration-[2s]">
                <Button>Contact Me</Button>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-end w-2/5 relative pr-20">
          {!isLoading && (
          <>
            <div className="w-7/12 h-[375px] border-8 border-primary/90 rounded-xl absolute bg-white animate-slide-to-right-delay animation-duration-[2.5s]" />
            <div className="w-7/12 h-[375px] bg-white absolute -mt-8 -mr-20 shadow-lg border border-gray-100 rounded-xl animate-slide-to-right-delay animation-duration-[3.5s]">
              <Image
                quality={75}
                alt="Profile"
                height={0}
                width={0}
                className="w-auto h-full mx-auto"
                draggable={false}
                src={ProfileImage}
              />
            </div>
          </>

          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOpeningFeature;
