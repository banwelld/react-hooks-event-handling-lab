import React from 'react'

const onPasswordEnter = () => console.log('Entering password...');

function Keypad (){
    return (
        <div>
            <form id="keypad">
                <input type="password" id="password-input" autoComplete="password" onChange={onPasswordEnter} />
            </form>
        </div>
    )
}

export default Keypad;