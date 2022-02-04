import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { registration, login } from '../http/userApi';
import { Context } from '..';

function Auth() {
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === '/login'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context)

  const signIn = async() => {
    try{
      let data;
      if(isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch(e) {
      alert(e.response.data.message)
    }
  }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
      <Card>
        <Form style={{width: 600}} className="p-5 d-flex flex-column">
          <h2 className="m-auto">Authorization</h2>
          <Form.Control placeholder="e-mail" className="mt-3" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
          <Form.Control placeholder="password" type="password" className="mt-3" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? 
            <>
              <div>Don't have account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink></div>
              <Button variant="outline-success" onClick={() => signIn()}>Login</Button>
            </>
            : 
            <>
            <div>Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink></div>
            <Button variant="outline-success" onClick={() => signIn()}>Register</Button>
            </>
          }
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
