import './Button.scss';

type HandleJokeProps = {
  fetchJoke: () => Promise<void>;
};

function Button({ fetchJoke }: HandleJokeProps) {
  const handleClick = () => {
    fetchJoke();
  };

  return (
    <button onClick={handleClick} type="button" className="button">
      NEW JOKE
    </button>
  );
}

export default Button;
