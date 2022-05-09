import { useEffect, useState } from 'react';

const usePromise = (promiseCreator: (param?: any) => any, deps: any[]) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error as any);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
};

export default usePromise;
