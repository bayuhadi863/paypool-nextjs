import React, { Suspense } from 'react';
// mantine import
import { Button, Group } from '@mantine/core';
// next js import
import Image from 'next/image';
// components import
import QuestionsList from '@/components/home/questions-list';
import PopularQuestions from '@/components/home/popular-questions';
import PopularTopics from '@/components/topics/popular-topics';
import QuestionListSkeleton from '@/components/questions/question-list-skeleton';
import PopularSkeleton from '@/components/topics/popular-skeleton';

const HomePage = ({ searchParams }: { searchParams: any }) => {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-12'>
      <div className='lg:col-span-2'>
        <h1 className='text-4xl font-semibold mb-2'>Welcome to Digicon!</h1>
        <h2 className='text-xl font-medium'>Create and Find Many Discussion About Information Technology.</h2>
        <div className='mt-8'>
          <h1 className='font-semibold text-2xl mb-4'>Followed Topic Questions</h1>
          <Suspense fallback={<QuestionListSkeleton />}>
            <QuestionsList page={searchParams.page} />
          </Suspense>
        </div>
      </div>
      <div>
        <div className='mb-4'>
          <Suspense fallback={<PopularSkeleton />}>
            <PopularQuestions />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<PopularSkeleton />}>
            <PopularTopics titleLarge={false} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
