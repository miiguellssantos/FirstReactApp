import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal})
            .then(res => {
            //this checkes if there is any other error with the response
            if(!res.ok){
                throw Error('Could not fetch the data from that resource');
            }
            return res.json();
            })
            .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null)
            })
            // this cathes the error if only we app can't connetc with the server
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsLoading(false)
                    setError(err.message)    
                }
            
            })

            return () => abortCont.abort();
        }, [url])
    
    return { data, isLoading, error}
}

export default useFetch;