
function Hello(props) {
    // di luar return adalah javascript biasa.
    // const nama = "Ucup";
    // console.log(props);

    // Melakukan destructing props
    const { name } = props;

    // di dalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            {/* <p>Saya {nama} joss - Example User</p> */}
            <p>Saya {props.name} - Example User</p>
        </div>
    )
}

export default Hello;