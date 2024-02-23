import Image from 'next/image';
import Label from '@/components/Label';
import ProfileImage from '@/assets/images/profile.png';
import Button from '@/components/button';

const SectionOpeningFeature = () => (
  <div className="container flex items-center justify-between">
    <div className="flex flex-col gap-y-4">
      <Label className="text-[#EAB308] animate-slide-top-to-bottom animation-duration-[0.5s]">Hello, Welcome</Label>
      <Label className="text-5xl animate-slide-top-to-bottom animation-duration-[1s]">I m Haris Ramadan</Label>
      <p className="text-lg animate-slide-top-to-bottom animation-duration-[1.5s]">
        Learn, Sharing, Problem solving, Try something new. I love all of those.
        <br />
        {'let\'s'}
        {' '}
        talk to build some miracle!
      </p>
      <div className="mt-5 animate-slide-top-to-bottom animation-duration-[2s]">
        <Button>Contact Me</Button>
      </div>
    </div>
    <div className="flex items-start justify-end w-2/5 relative pr-20">
      <div className="w-7/12 h-[375px] border-8 border-primary/90 rounded-xl overflow-hidden relative bg-white animate-slide-left-to-right animation-duration-[2.5s]" />
      <div className="w-7/12 h-[375px] overflow-hidden bg-white absolute -mt-8 -mr-20 shadow-lg border border-gray-100 rounded-xl animate-slide-left-to-right animation-duration-[3.5s]">
        <Image src={ProfileImage} objectFit="contain" fill alt="Profile" quality={50} />
      </div>
    </div>
  </div>
);

export default SectionOpeningFeature;
