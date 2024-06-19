function Login({userName}){
    return(
        <>
            <div className="flex flex-col w-fit p-4  bg-white rounded-lg">
                <form className="flex flex-col align-middle">
                    <h1 className="text-blue-800 font-extrabold tracking-wide text-lg text-center">Log in</h1>
                    <input className="py-1 pl-1 outline-none my-2 border-2 rounded-lg" type="text" placeholder="username"/>
                    <input className="py-1 pl-1 outline-none my-2 border-2 rounded-lg" type="password" placeholder="password" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setIsActive(!isActive);
                    }} className="p-2 mt-4 bg-blue-950 text-white rounded-lg font-medium" type="submit">Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login;