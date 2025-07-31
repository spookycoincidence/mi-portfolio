'use client';

import React, { useState, useEffect } from 'react';
import LoadingCharacter3D from './components/LoadingCharacter3D';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingCharacter3D isLoading={isLoading} />
      {!isLoading && children}
    </>
  );
}
