import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

type OwnProps = {
  children: ReactNode;
};

const StoreProvider = ({ children }: OwnProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
