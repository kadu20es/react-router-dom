import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [ time, setTime ] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime(t => t - 1);
    }, 1000);

    if (time <= 0){
      navigate('/posts/22?retorno=1', {
        state: `This is the state: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeout.current);
    }

  }, [time]);


  return (
    <div>
        <h1>Leaving in { time }</h1>
    </div>
  )
}
