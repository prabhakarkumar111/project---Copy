import { useCallback, useEffect, useState } from 'react';

const Password = () => {
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [char, setChar] = useState(false)
    const [password, setPassword] = useState("")


    let passwordGenerator = useCallback(() => {
        let pass = ""
        let word = "ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number) word += "0123456789"
        if (char) word += "`!#$%^&*()_+?/><{}[]"
        for (let i = 1; i <= length; i++) {
            pass += word[Math.floor(Math.random() * word.length)]
        }
        setPassword(pass)
    }, [length, number, char])



    useEffect(() => {
        passwordGenerator()
    }, [length, number, char])


    return (
        <div>
            <h1>Password generator</h1>
            <div className="input">
                <input type="text" value={password} readOnly placeholder='Password' id='input' />
                <button>Copy</button>
            </div>
            <div className="bottom">
                <input type="range" min={8} max={100} id='range' onChange={(e) => setLength(e.target.value)} value={length} />
                <label>Length: {length}</label>
                <input type="checkbox" defaultChecked={number} onChange={() => { setNumber((prev) => !prev) }} />
                <label >Numbers</label>
                <input type="checkbox" defaultChecked={char} onChange={() => { setChar((prev) => !prev) }} />
                <label >Charectors</label>
            </div>
        </div>
    )
}

export default Password