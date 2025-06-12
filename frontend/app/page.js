'use client'
import { useEffect, useState } from 'react'

export default function Home() {
    const [msg, setMsg] = useState('Loading...')

    useEffect(() => {
        fetch('http://localhost:8000/api/hello/')
            .then(res => res.json())
            .then(data => setMsg(data.message))
    }, [])

    return <h1>{msg}</h1>
}