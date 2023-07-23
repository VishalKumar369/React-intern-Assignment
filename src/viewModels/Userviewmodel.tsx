import { useState } from 'react';

interface User{
    name:string;
    phoneNumber:string;
    email:string;
}

const useUserViewModel = () => {
    const [user, setUser] = useState<User>({
        name:'',
        phoneNumber:'',
        email:''
    });

    const saveUserDetails = () =>{
       localStorage.setItem('userDetails', JSON.stringify(user))
    }

  return {
    user,
    setUser,
    saveUserDetails,
  }
  
}

export default useUserViewModel;