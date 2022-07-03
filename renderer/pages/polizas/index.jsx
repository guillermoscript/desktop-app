import { config } from "../../../configs";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import ActionRow from "../../components/Table/Row/ActionRow";


export default function Polizas() {

    const [loading, setLoading] = useState(true);
    const [poliza, setPoliza] = useState({
        polizas: null,
        names: null,
        token: null,
    });

    const user = useSelector((state) => state.users);
    const router = useRouter()

    const buttonsBranch = [
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            text: 'Anadir Poliza',
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            text: 'Actualizar Poliza',
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            text: 'Eliminar Poliza',
        },
    ]

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
                "Acciones",
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
            <Layout title="Polizas">
                <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                    <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                        <Link href="/polizas/create">
                            <a
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
                                Añadir Poliza
                            </a>
                        </Link>
                        <Link href="/polizas/update">
                            <a
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
                                Actualizar Poliza
                            </a>
                        </Link>
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

const list = [
    {
        link: "/polizas/[id]",
        image: "/images/watch.svg",
    },
    {
        link: "/polizas/[id]",
        image: "/images/update.svg",
    },
    {
        link: "/polizas/[id]",
        image: "/images/delete.svg",
    },
];

const actionButton = list.map((item, index) => (
    <ActionRow {...item} key={index} />
))

function filteredPoliza(poliza) {
    return poliza.map((el) => {
        const data = {
            id: el.id,
            policyNum: el.policyNum,
            risk: el.Risk,
            insuredValue: el.insuredValue,
            Acciones: actionButton,
        };
        return data;
    });
}