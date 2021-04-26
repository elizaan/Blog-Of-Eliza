import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    setisLoading(false);
                    setErrors(err.message);
                })
        }, 800);
    }, [url])



    return { data, isLoading, errors, setData }
}

export default useFetch;