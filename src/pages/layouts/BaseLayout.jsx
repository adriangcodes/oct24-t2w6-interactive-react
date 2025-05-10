import { Link, Outlet } from "react-router-dom";

export function BaseLayout(){
    return(
        <>
			<header>
				<h1>Cool Pokemon Website</h1>
				<nav>
					<ul>
						<li>
							<Link to={"/"}>
								Home
							</Link>
						</li>
						<li>
							<Link to={"/about"}>
								About
							</Link>
						</li>
						<li>
							<Link to={"/pokemon"}>
								Pokemon Search
							</Link>
						</li>
					</ul>
				</nav>
			</header>

            <Outlet />

            <footer>
                Copyright Me Because I'm Awesome!
            </footer>
        </>
    )
}