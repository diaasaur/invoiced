import { useEffect, useState } from 'react';

export default function useMedia(query) {
  const [state, setState] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = e => setState(e.matches);

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [query]);

  return state;
}
