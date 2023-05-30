import { useState } from 'react';
import FormLogin from '../../components/Admin/FormLogin';
import FormRegistrasi from '../../components/Admin/FormRegistrasi';

const HalamanLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            {isLogin ? <FormLogin /> : <FormRegistrasi />}
            <br />
            {isLogin ? (
                <a href='#' onClick={() => setIsLogin(false)}>
                    Belum punya akun? Registrasi dahulu
                </a>
            ) : (
                <a href='#' onClick={() => setIsLogin(true)}>
                    Sudah punya akun? Login saja
                </a>
            )}
        </>
    );  
};
export default HalamanLogin;