import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../types';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector }