import  useUserViewModel  from '../viewModels/Userviewmodel';
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { user, setUser, saveUserDetails } = useUserViewModel();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        saveUserDetails();
        navigate('/second-page');
    };

    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Continue
                </Button>
            </form>
        </Container>
    )
}

export default LoginPage;