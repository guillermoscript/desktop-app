import { config } from "../../../configs";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email("Email no valido").required("Email Requerido"),
    name: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    civilPolicyStatus: yup.string(),
    company: yup.string(),
    birthDate: yup.date().required("La Fecha de Nacimiento es Requerida"),
    document: yup.number().required("El documento es Requerido"),
    documentTypeId: yup.number().required("El documento es Requerido"),
    phone: yup.string(),
  })
  .required();

export default function Clientes({ clients, names }) {
  const [showModal, setShowModal] = useState(false);
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
      name: "email",
      type: "email",
      placeholder: "Email",
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
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Jose Carlos",
      register,
      errors,
      text: "Nombres",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Duarte Molinas",
      register,
      errors,
      text: "Apellidos",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      //tranformar esto en un select
      id: 4,
      name: "documentTypeId",
      type: "text",
      placeholder: "1",
      register,
      errors,
      text: "Tipo de Documento",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 5,
      name: "document",
      type: "text",
      placeholder: "14616646",
      register,
      errors,
      text: "Documento",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 6,
      name: "birthDate",
      type: "date",
      placeholder: "01-10-14",
      register,
      errors,
      text: "Fecha de Nacimiento",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 7,
      name: "phone",
      type: "text",
      placeholder: "0414779865",
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
      id: 8,
      name: "company",
      type: "text",
      placeholder: "Enyel y los otros",
      register,
      errors,
      text: "Compania",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 9,
      name: "civilPolicyStatus",
      type: "text",
      placeholder: "Soltero",
      register,
      errors,
      text: "Estado Civil",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
    {
      id: 10,
      name: "ocupation",
      type: "text",
      placeholder: "Dev",
      register,
      errors,
      text: "Ocupacion",
      classes: {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input:
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "col-span-6 sm:col-span-3",
      },
    },
  ];

  return (
    <>
      {/* <Layout title={polizas.title}> */}
      <Layout title="Clientes">
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
              Añadir Cliente
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
            {clients.map((el) => {
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
            submitFunction={createClient}
            handleSubmit={handleSubmit}
            data={data}
            title="Añadir Cliente"
          />
        ) : null}
      </Layout>
    </>
  );
}

async function createClient(data) {
  const apiUrl = config.apiUrl();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIxLCJlbWFpbCI6Imd1aWxsZUBhZG1pbi5jb20iLCJpYXQiOjE2NTQ4NTEzMDQsImV4cCI6MTY1NDg1NDkwNH0.KjkzuugtnXjuItYLACdlbEq25zd63DzkR93pea-Lx4w";

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
    const response = await fetch(`${apiUrl}/clients`, requestOptions);
    const data = await response.json();
    console.log(data, "2");
    return filteredClientData(data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getClients() {
  const apiUrl = config.apiUrl();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIxLCJlbWFpbCI6Imd1aWxsZUBhZG1pbi5jb20iLCJpYXQiOjE2NTQ4NTEzMDQsImV4cCI6MTY1NDg1NDkwNH0.KjkzuugtnXjuItYLACdlbEq25zd63DzkR93pea-Lx4w";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/clients`, requestOptions);
    const data = await response.json();
    return filteredClientData(data);
  } catch (error) {
    console.log(error);
    return;
  }
}

const onSubmit = (data) => {
  registerUser(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

function filteredClientData(client) {
  return client.map((el) => {
    const data = {
      id: el.id,
      fullName: `${el.Persons.name} ${el.Persons.lastName}`,
      document: `${el.Persons.documentTypeId} ${el.Persons.document}`,
      gender: el.Persons.gender,
      birthDate: el.Persons.birthDate,
      company: el.company,
      ocupation: el.ocupation,
    };
    return data;
  });
}

export async function getServerSideProps(context) {
  const head = [
    "ID",
    "Nombre",
    "Documento",
    "Genero",
    "Fecha De Nacimiento",
    "Company",
    "Ocupacion",
  ];

  const clients = await getClients();

  return {
    props: {
      names: head,
      clients,
    }, // will be passed to the page component as props
  };
}
