import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Couldn\'t fetch the data');
                    }
                    return res.json();
                })
                .then(data => {
                    setErrors(null);
                    setisLoading(false);
                    setData(data);

                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } else {
                        setisLoading(false);
                        setErrors(err.message);
                    }

                })
        }, 800);

        return () => abortCont.abort();

    }, [url])



    return { data, isLoading, errors, setData }
}

export default useFetch;