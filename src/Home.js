import { useState  } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const [nameHook, setNameHook] = useState('Something could happen...');
  const handleClickEvent = () => {
    console.log('hello world!')
  }

  /* 
    This is a constant to show how a useEffect hook works with a dependence
    Here, we put 'mario' as the initial state, and later on the code, only when
    it changes to 'luigi', the useEffect hook runs. 
  
    const [name, setName] = useState('mario')

    (it is just a comment because the useEffect hook will be used for another thing.)
  */
  const handleClickUseState = () => {
    setNameHook('LOOK OUT! It changed!')
  }

  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
  


  return (
    <div className="home">
      <h2>Homepage</h2>
      <button className="btn" onClick={handleClickEvent}>This is a onClick event listener (check the console)</button>
      <button className="btn" onClick={handleClickUseState}>This is a useState hook</button>
      <p>{ nameHook }</p>


      {/*
        Usually, fetching data on JavaScript takes a big amount of time, because the data is fetched from another server in the internet. 
        Thonking of that, we put a loading div that is outputed only when we are fetching data from the JSON file.
      */}
      { isLoading && <div>Loading...</div>}

      {/*
        The reason that this has the blogs before the component is because, initially, the blogs constant is equal to null. So, to avoid
        an error, we put this condition so that if blogs is null, javascript doesn't even care about the rest of the condition, but
        when the app fetches the data from the JSON file, the condition becomes true and the content of the blogs is shown. 
      */}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}

      {/*
        Outputting the error if it has one...
      */}
      {error && <div>{error}</div>}
    </div>
  );
}
export default Home;
