import { Outlet } from "react-router-dom";

export function BaseLayout(){
    return(
        <>
            <header>
                <nav>
                    <h1>Cool Pokemon Website</h1>
                </nav>
            </header>
            <Outlet />
            <footer>
                Copyright Me Because I'm Awesome!
            </footer>
        </>
    )
}