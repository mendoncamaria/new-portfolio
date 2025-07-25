import { commonStyles } from '@/app/tailwindStyles';
import { aboutContent } from '@/constants/ArrayConstants';
import React from 'react';

const About = () => {
  return (
    <section id="about" className={commonStyles.container}>
      <div className="container mx-auto max-w-7xl">
        <h1 className={commonStyles.sectionHeader}>
          ABOUT ME
        </h1>

        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400 z-0" />

          <div className="space-y-16">
            {' '}
            {aboutContent.map((item, index) => (
              <div
                key={index}
                className={`flex w-full items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 2xl:w-1/2 p-6 rounded-lg animate-fade-in ${
                    index % 2 === 0
                      ? 'pr-8 md:pr-0 md:ml-auto md:mr-[calc(50%+1rem)]'
                      : 'pl-8 md:pl-0 md:mr-auto md:ml-[calc(50%+1rem)]'
                  }`}
                  style={{ animationDelay: `${index * 0.5}s`, padding: '2rem' }}
                >
                  <p className="text-2xl font-semibold text-blue-700 mb-3 2xl:px-10">
                    {item.title}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
