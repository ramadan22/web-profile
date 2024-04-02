'use client';

import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import Label from '@/components/Label';
import { cn } from '@/lib/classnames';
import { useGetSectionEducational } from './hooks/get-data';

const SectionEducationalFeature = () => {
  const [isShowLeft, setIsShowLeft] = useState(false);

  const { data: sectionEducationalData } = useGetSectionEducational();

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
      <div className="container py-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <h1 className="text-2xl text-center mb-10">Educational</h1>
        <div className="relative grid grid-cols-2 gap-20">
          {sectionEducationalData?.data?.map((item, idx) => {
            const lists = item?.list?.split(',');

            const pairIndex = Math.floor(idx / 2);
            const duration = (pairIndex + 1) * 0.5;

            const stringClassDelay = idx > 1 ? '-delay' : '';

            return (
              <div
                key={item.id}
                className={cn(
                  `bg-white h-[280px] flex items-center justify-between rounded-lg animation-duration-[${duration}s]`,
                  isShowLeft && (
                    (Number(idx) % 2 === 0) ? `animate-slide-to-right${stringClassDelay}` : `animate-slide-to-left${stringClassDelay}`
                  ),
                  !isShowLeft && (
                    (Number(idx) % 2 === 0) ? `animate-hide-to-left${stringClassDelay}` : `animate-hide-to-right${stringClassDelay}`
                  ),
                )}
              >
                <div className="w-16 h-16 rounded-[10px] bg-white -ml-10" />
                <div className="flex-1 h-full py-10 px-4">
                  <h2 className="text-2xl">{item.title}</h2>
                  <Label className="text-black/50">{item.small_title}</Label>
                  <ul className="list-disc pl-4 py-5">
                    {lists.map((list) => (
                      <li key={list}>
                        <Markdown>
                          {list}
                        </Markdown>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-16 h-16 rounded-[10px] bg-gray-50 -mr-4" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionEducationalFeature;
