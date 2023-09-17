import React from 'react'
import { Form, Button, Alert, Nav } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { registerUser } from '../../app/api/auth'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const schema = yup.object({
    full_name: yup.string().required('Nama Lengkap harus diisi'),
    email: yup.string().email().required('Email harus valid'),
    password: yup.string().min(8, 'Minimal panjang password harus 8 karakter').required('Password Harus diisi'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Password konfirmasi tidak sama'),
}).required();

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

export const Register = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema)
    });
    const [status, setStatus] = React.useState(statusList.idle);
    const history = useNavigate();

    const onSubmit = async formData => {
        setStatus(statusList.process);
        const { data } = await registerUser(formData);
        if (data.error) {
            let fields = Object.keys(data.fields);
            fields.forEach(field => setError(field, { type: 'server', message: data.fields[field]?.properties?.message }));
            setStatus(statusList.error);
            return;
        }
        setStatus(statusList.success);
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            backgroundColor: "yellow"
        }}>
            {status === statusList.success ?
                <Alert variant='success'>
                    Registrasi berhasil silahkan {' '}
                    <Alert.Link onClick={() => history('/login')}>Login</Alert.Link> dengan email dan password anda
                </Alert> : null
            }
            <form onSubmit={handleSubmit(onSubmit)} style={{
                height: "500px",
                width: "350px",
                backgroundColor: "white",
                borderRadius: "10px",
                paddingLeft: "20px",
                paddingBottom: "20px",
                boxShadow: "5px 5px 6px 6px #c7bdc7"
            }}>
                <h2 style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "15px",
                    paddingBottom: "20px"
                }}>Buat Akun Baru</h2>
                <Form.Group controlId="formGridName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                        type="text"
                        isInvalid={errors.full_name}
                        placeholder="Masukan nama lengkap"
                        {...register('full_name')}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.full_name?.message}
                    </Form.Control.Feedback>
                </Form.Group>
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
                <Form.Group controlId="formGridPasswordConfirmation">
                    <Form.Label>Konfirmasi Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Konfirmasi Password"
                        isInvalid={errors.password_confirmation}
                        {...register('password_confirmation')}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password_confirmation?.message}
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
                }}
                    type="submit" disabled={status === statusList.process}>
                    {status === statusList.process ? 'Memproses...' : 'Mendaftar'}
                </Button>
                <div>
                    <p>Sudah punya akun?</p>
                    <LinkContainer to={'/Login'}>
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                </div>
            </form>
        </div >
    )
}