// import Link from "next/link";
import { useState } from "react";
import FormLogin from "../../components/Admin/FormLogin";
import FormRegistrasi from "../../components/Admin/FormRegistrasi";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            {isLogin ? <FormLogin /> : <FormRegistrasi />}
            <br />
            {isLogin ? (
                <a href='/admin/signup' onClick={() => setIsLogin(false)}>
                    Belum punya akun? Registrasi dahulu
                </a>
            ) : (
                <a href='/admin' onClick={() => setIsLogin(true)}>
                    Sudah punya akun? Login saja
                </a>
            )}

        </>
    )

};

export default Login;
