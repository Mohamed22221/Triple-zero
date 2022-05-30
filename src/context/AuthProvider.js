import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ 
        email: 'superadmin@info.me',
        password: '12345678',
        roles: ['2001', '5150'],
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdHJhY2tpbmcuMDAwaXRrdy5jb20vYXBpL2FkbWlucy9sb2dpbiIsImlhdCI6MTY1MzgzODA2MiwiZXhwIjoxNjUzODQxNjYyLCJuYmYiOjE2NTM4MzgwNjIsImp0aSI6InVuUmFsb1UzMUxhRDlUcW8iLCJzdWIiOiIxIiwicHJ2IjoiZGY4ODNkYjk3YmQwNWVmOGZmODUwODJkNjg2YzQ1ZTgzMmU1OTNhOSJ9.oOCLT-n4pPPudt6zqKCucvEqsVSG38ATiCOSVl_MAMY'
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;