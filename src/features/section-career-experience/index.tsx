import Image from 'next/image';
import { useState } from 'react';
import codelabsIndonesiaImage from '@/assets/images/codelabsindonesia.png';
import incubesolutionImage from '@/assets/images/incubesolution.png';
import alteacareImage from '@/assets/images/alteacare.png';
import pinaIndonesiaImage from '@/assets/images/pinaindonesia.png';
import { cn } from '@/lib/classnames';

const CareerExperienceFeature = () => {
  const [isShowLeft, setIsShowLeft] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const container = document.getElementById('section-career-experience');
      const containerPosition = container?.getBoundingClientRect();
      const navComponent = document.getElementById('navbar');

      if (containerPosition && navComponent) {
        setIsShowLeft(
          (containerPosition.y - (containerPosition.height / 4))
            - navComponent.offsetHeight <= 0,
        );
      }
    });
  }

  return (
    <div id="section-career-experience">
      <div className="container pt-20 pb-16 h-[calc(100vh-80px)] flex flex-col justify-center">
        <h1 className="text-2xl text-center mb-10">Careers Experience</h1>
        <div className="grid grid-cols-4 gap-x-5 items-start">
          <div
            className={cn(
              'border rounded-lg bg-white flex flex-col justify-center items-center pb-5 pt-2.5 px-5 animation-duration-[0.5s]',
              isShowLeft ? 'animate-slide-to-bottom-delay' : 'animate-hide-to-top-delay',
            )}
          >
            <Image
              src={incubesolutionImage}
              height={0}
              width={0}
              className="w-[100px] h-[100px]"
              alt="incube solutions"
            />
            <h2 className="text-lg text-center my-1.5">Incube Solutions</h2>
            <p className="text-sm text-gray-500 text-center">INCUBE Solutions is an IT Solution provider company, offering a wide range of IT solutions customized to various verticals and horizontals.</p>
          </div>
          <div
            className={cn(
              'border rounded-lg bg-white flex flex-col justify-center items-center pb-5 pt-1 px-5 animation-duration-[1s]',
              isShowLeft ? 'animate-slide-to-bottom-delay' : 'animate-hide-to-top-delay',
            )}
          >
            <Image
              src={codelabsIndonesiaImage}
              height={0}
              width={0}
              className="w-[150px] h-auto"
              alt="codelabs indonesia"
            />
            <h2 className="text-lg text-center my-1.5">Codelabs Indonesia</h2>
            <p className="text-sm text-gray-500 text-center">Codelabs is an intelligent IT solutions provider specializing in the development, implementation and maintenance</p>
          </div>
          <div
            className={cn(
              'border rounded-lg bg-white flex flex-col justify-center items-center py-5 px-5 animation-duration-[1.5s]',
              isShowLeft ? 'animate-slide-to-bottom-delay' : 'animate-hide-to-top-delay',
            )}
          >
            <Image
              src={alteacareImage}
              height={0}
              width={0}
              className="w-[150px] h-auto"
              alt="alteacare"
            />
            <h2 className="text-lg text-center mt-4 mb-2">Alteacare</h2>
            <p className="text-sm text-gray-500 text-center">AlteaCare, under PT. Sehat Digital Nusantara, is a leading health app in Indonesia, providing diverse services such as teleconsultations with specialists, prescription drug delivery, vaccination registration, and up-to-date health information.</p>
          </div>
          <div
            className={cn(
              'border rounded-lg bg-white flex flex-col justify-center items-center py-5 px-5 animation-duration-[2s]',
              isShowLeft ? 'animate-slide-to-bottom-delay' : 'animate-hide-to-top-delay',
            )}
          >
            <Image
              src={pinaIndonesiaImage}
              height={0}
              width={0}
              className="w-[100px] h-auto mt-2"
              alt="pina indonesia"
            />
            <h2 className="text-lg text-center mt-4 mb-2">Pina Indonesia</h2>
            <p className="text-sm text-gray-500 text-center">PINA is shaping the future of personal finance, striving to empower everyone for financial freedom. Their mission involves simplifying complex financial decisions through personalized advice and robust online tools, enabling smarter investing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExperienceFeature;
