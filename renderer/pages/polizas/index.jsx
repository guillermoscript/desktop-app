import { config } from "../../../configs";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const schema = yup
    .object({
        email: yup.string().email("Email no valido"),
        name: yup.string().required("La contrasena es requerida"),
        document: yup.number().required("El Rif es Requerido"),
        phone: yup.string(),
        account: yup.string(),
        paymentLink: yup.string(),
    })
    .required();

export default function Polizas() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [poliza, setPoliza] = useState({
        polizas: null,
        names: null,
        token: null,
    });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const data = [
        {
            id: 1,
            name: "document",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "RIF de la Empresa",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Nombre de la Empresa",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "",
            register,
            errors,
            text: "Correo Electronico",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 4,
            name: "phone",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Telefono",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 5,
            name: "account",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Cuenta Bancaria",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 6,
            name: "paymentLink",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Link de Pago",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
    ];
    const user = useSelector((state) => state.users);
    const router = useRouter()

    useEffect(() => {
        async function fetchPolizas() {
            console.log(user, "user");
            if (!user.token) {
                router.push("/auth")
            }

            const head = [
                "ID",
                "Numero de Poliza",
                "Riesgo",
                "Valor Asegurado",
            ];
            const polizas = await getPoliza(user.token);

            setPoliza({
                names: head,
                polizas,
                token: user.token,
            });
            setLoading(false);
        }
        fetchPolizas();
    }, []);

    const { polizas, names, token } = poliza

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            {/* <Layout title={polizas.title}> */}
            <Layout title="Aseguradoras">
                <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                    <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                        <button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            type="button"
                            data-modal-toggle="add-user-modal"
                            className="w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
                        >
                            <svg
                                className="-ml-1 mr-2 h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Añadir Aseguradora
                        </button>
                        <a
                            href="#"
                            className="w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
                        >
                            <svg
                                className="-ml-1 mr-2 h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Exportar
                        </a>
                    </div>
                </div>

                <Table>
                    <TableHead names={names} />
                    <TableBody>
                        {polizas.map((el) => {
                            return (
                                <tr
                                    key={el.id}
                                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                                >
                                    {<TableRow data={el} />}
                                </tr>
                            );
                        })}
                    </TableBody>
                </Table>

                {showModal ? (
                    <Modal
                        setShowModal={setShowModal}
                        submitFunction={async (data) => {
                            const newPoliza = await createPoliza(data, token)
                            console.log(newPoliza, "newPoliza");
                            setPoliza({
                                ...poliza,
                                polizas: [...polizas, newPoliza],
                            });
                            console.log(poliza, "poliza");
                            return newPoliza;
                        }}
                        handleSubmit={handleSubmit}
                        data={data}
                        title="Poliza"
                    />
                ) : null}
            </Layout>
        </>
    );
}

async function createPoliza(data, token) {
    const apiUrl = config.apiUrl();
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIxLCJlbWFpbCI6Imd1aWxsZUBhZG1pbi5jb20iLCJpYXQiOjE2NTQ4NTEzMDQsImV4cCI6MTY1NDg1NDkwNH0.KjkzuugtnXjuItYLACdlbEq25zd63DzkR93pea-Lx4w";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(data),
    };
    console.log(JSON.stringify(data), "1");
    try {
        const response = await fetch(`${apiUrl}/policies`, requestOptions);
        const data = await response.json();
        console.log(data, "2");
        return {
            id: data.id,
            companyName: data.name,
            document: `j-${data.document}`,
            email: data.email,
        };
    } catch (error) {
        console.error(error);
        return error;
    }
}

async function getPoliza(token) {
    const apiUrl = config.apiUrl();
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIxLCJlbWFpbCI6Imd1aWxsZUBhZG1pbi5jb20iLCJpYXQiOjE2NTQ4NTEzMDQsImV4cCI6MTY1NDg1NDkwNH0.KjkzuugtnXjuItYLACdlbEq25zd63DzkR93pea-Lx4w";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    try {
        const response = await fetch(`${apiUrl}/policies`, requestOptions);
        const data = await response.json();
        console.log(data, 'data');
        return filteredPoliza(data);
    } catch (error) {
        console.error(error);
        return;
    }
}

const onSubmit = (data) => {
    registerUser(data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
};

function filteredPoliza(poliza) {
    return poliza.map((el) => {
        const data = {
            id: el.id,
            policyNum: el.policyNum,
            risk: el.Risk,
            insuredValue: el.insuredValue,
        };
        return data;
    });
}