import type { User } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react' 

interface AuthContextProps {
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    function setAuth(authUser: User | null) {
        setUser(authUser);
    }

    return (
        <AuthContext.Provider value={{ user, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
// quem estar usando o contexto de autenticação pode usar esse hook para ter acesso ao usuario e a função de setar o usuario
export const useAuth = () => useContext(AuthContext);