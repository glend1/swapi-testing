import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const [name, setName] = useState()
    useEffect(() => {
        fetch('https://swapi.dev/api/people/1/?format=json')
            .then((res) => res.json())
            .then((json) => setName(json.name))
    }, [])
    return (
        <>
            <h1>Who is in star wars?</h1>
            <h2>{name}</h2>
        </>
    )
}

export default App
