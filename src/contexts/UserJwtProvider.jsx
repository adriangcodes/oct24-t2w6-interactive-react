import { useState } from "react"
import { UserJwtContext } from "./UserJwtContext"

export function UserJwtProvider({children}) {
    let [userJwt, setUserJwt] = useState("")

    // let userJwt = useContext(UserJwtContext)

    return(
        <UserJwtContext.Provider value={[userJwt, setUserJwt]}>
            {children}
        </UserJwtContext.Provider>
    )
}