import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value) // need to fix
        setError(false)
    }
    const nameTrim = name.trim()

    const addUser = () => {
        if (nameTrim === '') {
            setError(true)
        } else {
            alert(`Hello ${nameTrim} !`)
            addUserCallback(nameTrim)
        }
        setName('')

    }

    const totalUsers = users.length;  // need to fix

    return (
        <Greeting
            nameTrim={nameTrim}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
