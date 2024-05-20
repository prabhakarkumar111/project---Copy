import App from "./App"

function Header(props) {
    console.log(props);
    return (
        <>
        <h1 className="heading">useState {props.obj.name} </h1>
        </>
    )
}
export default Header