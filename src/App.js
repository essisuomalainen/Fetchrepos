import './App.css';
import { useState, useEffect } from 'react';
import { styles } from './styles';

function App() {
  const classes = styles();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    fetchData();
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
    fetchData();
  };

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repositoryName[count]}`
      );
      const data = await response.json();
      console.log(data.stargazers_count, data.full_name, data.description);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const newData = {
        fullname: data.full_name,
        description: data.description,
        starscount: data.stargazers_count,
      };
      setNewData(newData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = (
    <div className={classes.test}>
      <p>
        FULLNAME: <br />
        {newData.fullname}{' '}
      </p>
      <p>
        DESCRIPTION: <br />
        {newData.description}{' '}
      </p>
      <p>
        AMOUNT OF STARS: <br />
        {newData.starscount}
      </p>
    </div>
  );

  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading repository..</p>;
  }

  const repositoryName = [
    'eslint/eslint',
    'oakwood/front-end-questions',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express',
  ];

  return (
    <div className={classes.app}>
      <h1 className={classes.h1}>Fetch repositories</h1>
      <div className={classes.buttonsWrapper}>
        <button className={classes.button1} onClick={handleDecrement}>
          <svg
            height='20pt'
            viewBox='0 0 512 512'
            width='20pt'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
          </svg>
          <p> decrement</p>
        </button>
        <p>Counter: {count}</p>
        <button className={classes.button2} onClick={handleIncrement}>
          <svg
            height='20pt'
            viewBox='0 0 512 512'
            width='20pt'
            xmlns='http://www.w3.org/2000/svg'
            fill='white'
          >
            <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
            <path d='m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0' />
          </svg>
          <p>increment</p>
        </button>
      </div>
      <div className={classes.content}>{content}</div>
      {/* <div className='content'>
        <p>{newData.fullname}</p>
        <p>{newData.description}</p>
        <p>{newData.starscount}</p>
      </div> */}

      {/* {!isLoading && (
        <div className='data'>
          <p>Fullname: </p>
          <p>Description:</p>
          <p>amount of stars:</p>
        </div>
      )}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading..</p>} */}
    </div>
  );
}

export default App;
