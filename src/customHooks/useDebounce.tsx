import { useEffect, useState } from "react"

const useDebounce = (initVal: string, delay: number = 300): string => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(initVal), delay);


    return () => {
      clearTimeout(timer)
    }
  }, [initVal, delay])

  return debouncedValue;
}

export default useDebounce;
