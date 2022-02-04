import React, { useContext, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, CART_ROUTE } from '../utils/consts';
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom';


const NavBar = observer(() =>
  {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem("token")
      history.push(LOGIN_ROUTE)
    }

    useEffect(() => {
      !user.isAuth && history.push(SHOP_ROUTE)
    }, [user.isAuth])

    return   (
      <Navbar bg="dark" variant="dark">
        <Container>
        <Button variant="outline-light" onClick={() => history.push(SHOP_ROUTE)}>Main</Button>
            { user.isAuth ?
              <Nav className="ml-auto">
                <Button variant="outline-light" onClick={() => history.push(ADMIN_ROUTE)}>Admin panel</Button>
                <Button className="ml-2" variant="outline-light" onClick={() => history.push(CART_ROUTE)}>Cart</Button>
                <Button className="ml-2" variant="outline-light" onClick={() => logOut()}>Logout</Button>
              </Nav>
            :
              <Nav className="ml-auto">
                <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)}>Login</Button>
              </Nav>
            }
        </Container>
      </Navbar>);
  }
)




export default NavBar;
