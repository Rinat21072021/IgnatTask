import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    nameTrim: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {nameTrim, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
// const onKeyPressHandler=(e:KeyboardEventHandler<HTMLInputElement>)=>{
//         if(e.==="Enter"){}

    return (
        <div>
            <input
                value={nameTrim}
                onChange={setNameCallback}
                className={`${inputClass} ${s.someClass}`}

                onKeyPress={(e) => {
                    if (e.key === "Enter" && addUser) {
                        addUser()
                    }
                }
                }
            />

            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
