import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok) throw Error('error occured')
            return res.json()
        })
        .then((data)=>{
            setData(data)
            setLoading(false)
            setError(null)
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
            console.log(err);
            
        })
    },[url])

    return {data, loading , error}

}

export default useFetch;