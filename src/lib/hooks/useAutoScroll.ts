import { useEffect } from 'react';

export const useAutoScroll = (
  ref: React.RefObject<HTMLElement>,
  dependency: any[]
) => {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dependency, ref]);
};