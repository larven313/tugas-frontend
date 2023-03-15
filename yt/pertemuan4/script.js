console.log("Mulai React");
/**
 * Membuat Component Hello.
 * Mencetak UI (elements)
 */
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

/**
 * Membuat Component Header
 * Menampilkan Navigasi
 */

function Header() {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

/**
 * Membuat Component Main
 * Menampung komponen utama
 */
function Main() {
    return(
        <main>
            <Hello name="Ucup Joss"/>
            <Hello name="Unyil Sarunyil"/>
            <Hello name="Usro"/>
            <Hello name="Udin"/>
            <Hello name="Udil"/>
        </main>
    )
}

/**
 * Membuat Component Footer
 * menampilkan footer web
 */

function Footer() {
    return(
        <footer>
            <h2>Copyright ucupjoss23</h2>
            <p>Dibuat menggunakan ReactJS</p>
        </footer>
    )
}

function App() {
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

// element
// const name = "Ucup";
// const judul = <h1>Hello React - {name}</h1>;

// Mencetak elemen
// ReactDOM.render(judul, document.getElementById("root"));


/**
 * Mencetak component Hello ke div root
 */

ReactDOM.render(<App/>, document.getElementById("root"));
