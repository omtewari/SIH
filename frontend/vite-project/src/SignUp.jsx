import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import axios from "axios";
   
  export function SignUp() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("http://localhost:8080/signup", { name, phoneNumber, age, password });
          console.log(response.data);
      } catch (error) {
          console.error('Error signing up user:', error.response.data);
      }
  };
  
    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Full name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
             Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="phone number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setPhoneNumber(e.target.value)} // Updated to phoneNumber
            />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
             Age
            </Typography>
            <Input
              size="lg"
              placeholder="Age"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setAge(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <br />
        
          <Button type="submit" className="mt-6" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    );
  }
  
  export default SignUp;
  