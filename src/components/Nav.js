import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='https://openai.com/assets/images/favicon.svg?v=d04ebc881c'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{" "}
          OpenAI Shopify Challenge
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Nav;
