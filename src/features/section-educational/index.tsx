import Link from 'next/link';
import { useState } from 'react';
import Label from '@/components/Label';
import { cn } from '@/lib/classnames';

const SectionEducationalFeature = () => {
  const [isShowLeft, setIsShowLeft] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const container = document.getElementById('section-educational');
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
    <div id="section-educational">
      <div className="container pt-20 pb-16 h-[calc(100vh-80px)] flex flex-col justify-center">
        <h1 className="text-2xl text-center mb-10">Educational</h1>
        <div className="relative grid grid-cols-2 gap-x-20">
          <div
            className={cn(
              'bg-white h-[280px] flex items-center justify-between rounded-lg animation-duration-[1s]',
              isShowLeft ? 'animate-slide-to-right' : 'animate-hide-to-left',
            )}
          >
            <div className="w-16 h-16 rounded-[10px] bg-white -ml-10" />
            <div className="flex-1 h-full py-10 px-4">
              <h2 className="text-2xl">Al-Amanah High School</h2>
              <Label className="text-black/50">Software Enginer</Label>
              <ul className="list-disc pl-4 py-5">
                <li>
                  Runner Up Lomba Web Design
                  {' '}
                  <Link href="https://www.alamanahbantani.sch.id/berita/smk-al-amanah/8/smk-al-amanah-meraih-posisi-runner-up-kota-tangerang-selatan.html" target="_blank" className="text-primary hover:text-primary/50">link</Link>
                </li>
                <li>Pernah Membuat Pemilihan Ketua Osis Online</li>
                <li>Praktek Kerja Lapangan - PUSPITEK</li>
                <li>Peringkat Satu Uji Kompetensi</li>
              </ul>
            </div>
            <div className="w-16 h-16 rounded-[10px] bg-gray-50 -mr-4" />
          </div>
          <div
            className={cn(
              'bg-white h-[280px] flex items-center justify-between rounded-lg animation-duration-[1s]',
              isShowLeft ? 'animate-slide-to-left' : 'animate-hide-to-right',
            )}
          >
            <div className="w-16 h-16 rounded-[10px] bg-white -ml-10" />
            <div className="flex-1 h-full py-10 px-4">
              <h2 className="text-2xl">Pamulang University</h2>
              <Label className="text-black/50">Software Enginer</Label>
              <ul className="list-disc pl-4 py-5">
                <li>Penyelenggara Seminar Wordpress</li>
              </ul>
            </div>
            <div className="w-16 h-16 rounded-[10px] bg-gray-50 -mr-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEducationalFeature;
