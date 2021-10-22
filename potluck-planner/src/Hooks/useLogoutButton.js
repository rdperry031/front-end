import { useState } from 'react';

export const useLogoutButton = (initialValue) => {
    const [logout, setLogout] = useState(initialValue)
    
    return [logout, setLogout]

}