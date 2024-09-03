import { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function SignUpHospital() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8080/signup-hospital', {
                name,
                phoneNumber,
                password,
            });
            setSuccess('Hospital signed up successfully!');
            console.log(response.data);
            // Handle further actions on success, like redirecting or showing a message
        } catch (err) {
            setError('Error signing up hospital. Please try again.');
            console.error(err);
        }
    };

    return (
        <Card color="transparent" shadow={false} className="w-96 mx-auto mt-16">
            <Typography variant="h4" color="blue-gray">
                Hospital Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to create a hospital account.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
                <div className="mb-4 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Hospital Name
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        placeholder="Hospital Name"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                {success && <Typography color="green" className="mt-2 text-center">{success}</Typography>}
                <Button className="mt-6" fullWidth type="submit">
                    Sign Up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-gray-900">
                        Log In
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default SignUpHospital;
