'use client';

import React from 'react';
import ReownProvider from './reownProvider';

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return <ReownProvider>{children}</ReownProvider>;
}
