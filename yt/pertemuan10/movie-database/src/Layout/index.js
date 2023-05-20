import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/index.js";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
