import { useCallback, useEffect, useState } from 'react'
import netlifyAuth from '../netlifyAuth.js'


const useAuth = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(netlifyAuth.isAuthenticated)
    const [user, setUser] = useState<any>()

    useEffect(() => {
        netlifyAuth.initialize((user: any) => {
            setLoggedIn(!!user)
        })
    }, [loggedIn])

    const login = useCallback(() => {
        netlifyAuth.authenticate((user: any) => {
            setLoggedIn(!!user)
            setUser(user)
        })
    }, [])

    const logout = () => {
        netlifyAuth.signout(() => {
            setLoggedIn(false)
            setUser(null)
        })
    }


    return { loggedIn, login, logout, user }
}

export default useAuth