import { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function LoginHospital() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/login-hospital', { phoneNumber, password });
            console.log(response.data);
            // Handle successful login (e.g., redirect, show message, etc.)
        } catch (err) {
            setError('Invalid phone number or password');
            console.error(err);
        }
    };

    return (
        <Card color="transparent" shadow={false} className="w-96 mx-auto mt-16">
            <Typography variant="h4" color="blue-gray">
                Hospital Log In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your credentials to access your hospital account.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
                <div className="mb-4 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Phone Number
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        placeholder="Phone Number"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        placeholder="Password"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <Typography color="red" className="mt-2 text-center">{error}</Typography>}
                <Button className="mt-6" fullWidth type="submit">
                    Log In
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{' '}
                    <Link to="/signup-hospital" className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default LoginHospital;
