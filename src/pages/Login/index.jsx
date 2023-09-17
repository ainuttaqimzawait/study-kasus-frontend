import { loginUser } from "../../app/api/auth";
import React from 'react'
import { Form, Button, Card, Nav } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../app/features/Auth/actions'
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

const schema = yup.object({
    email: yup.string().email('Email harus valid').required('Email harus diisi'),
    password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi')
}).required();

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

export default function Login() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema)
    });
    const [status, setStatus] = React.useState(statusList.idle);
    const dispatch = useDispatch();
    const history = useNavigate();

    const onSubmit = async formData => {
        setStatus(statusList.process);
        const { data } = await loginUser(formData);
        if (data.error) {
            setError('password', { type: 'invalidCredential', message: data.message });
            setStatus(statusList.error)
        } else {
            const { user, token } = data;
            dispatch(userLogin({ user, token }));
            history('/');
        }
        setStatus(statusList.success);
    }

    return (
        < div style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            backgroundColor: "yellow"
        }}>
            <Card style={{ width: '35%', margin: '150px auto', boxShadow: "5px 5px 6px 6px #c7bdc7" }}>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Alamat Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                isInvalid={errors.email}
                                {...register('email')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                isInvalid={errors.password}
                                {...register('password')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button style={{
                            width: "315px",
                            height: "40px",
                            border: "0.5px solid #ddd7dd",
                            borderRadius: "3px",
                            marginLeft: "-15px",
                            paddingLeft: "10px",
                            fontSize: "16px",
                            backgroundColor: "#089508"
                        }} type="submit" disabled={status === statusList.process}>
                            {status === statusList.process ? 'Memprosess...' : 'Login'}
                        </Button>
                        <div>
                            <p>Belum punya akun?</p>
                            <LinkContainer to={'/register'}>
                                <Nav.Link >Daftar</Nav.Link>
                            </LinkContainer>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
