import { useState, useEffect } from 'react';
import ClickButton from '../Button/Button';
import './Widget.scss';

function Widget() {
  //
  const [newJoke, setNewJoke] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchJoke() {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const joke = await response.json();
      setNewJoke(joke.value);
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <article className="widget">
      <p className="widget-content">{isLoading ? 'joke is coming' : newJoke}</p>
      <ClickButton fetchJoke={fetchJoke!} />
    </article>
  );
}

export default Widget;
