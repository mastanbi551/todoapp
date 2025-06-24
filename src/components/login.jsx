export function Login(props) {
    console.log(props)
    function onLogin(e) {
        e.preventDefault();
        console.log(props.isAuth)
        props.setIsAuth(true)
    }
    return(
        <div>
            <button type="submit" onClick={(e) => onLogin(e)}>Login</button>
        </div>
    )
}