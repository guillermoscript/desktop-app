import InputGroup from "../InputGroup";
import { config } from '../../../../configs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router'

const schema = yup.object({
    email: yup.string().email('Email no valido').required('Email Requerido'),
    password: yup.string().required('La contrasena es requerida'),
}).required();


const apiUrl = config.apiUrl();

export default function Login({ setIsLogin }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const router = useRouter()

    const inputs = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            register,
            errors,
            text: 'Email',
            classes: {
                label: 'block text-gray-700 text-sm font-normal mb-2',
                input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                div: 'mb-4'
            }
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            register,
            errors,
            text: 'password',
            classes: {
                label: 'block text-gray-700 text-sm font-normal mb-2',
                input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                div: 'mb-4'
            }
        }
    ];

    async function loginUser(data) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        try {
            const response = await fetch(`${apiUrl}/auth/login`, requestOptions)
            const data = await response.json()
            localStorage.setItem('token', data.access_token)

            router.push('/poliza')
            // return data
        } catch (error) {
            return error
        }
    }

    const onSubmit = data => {
        loginUser(data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                <div
                    className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                >
                    Login
                </div>
                {inputs.map((el, index) => {
                    return <InputGroup key={index} {...el} />
                })}
                <div className="flex items-center justify-between">
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
                    <a
                        className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                    <a className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800" href="#" onClick={() => setIsLogin(false)} > Registrarse </a>
                </div>
            </form>
        </>
    )
}