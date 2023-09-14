/* eslint-disable no-console */
'use client'; // Error components must be Client Components

import Button from '@app/components/atoms/Button/Button';
import Header from '@app/components/organisms/Header/Header';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <div className="grid-container pt-[200px]">
        <h1 className="text-6xl lg:col-start-2 col-span-full mb-5 text-primary">
          Something went wrong!
        </h1>
        <Button
          className="lg:col-start-2"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </>
  );
}
