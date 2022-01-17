import { useRef, useEffect  } from "react";

function useInterval(callback, interval) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, []);
}

export default useInterval