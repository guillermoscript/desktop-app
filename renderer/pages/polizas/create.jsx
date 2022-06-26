import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputGroup from "../../components/forms/InputGroup";
import SelectGroup from "../../components/forms/SelectGroup";
import * as yup from "yup";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { config } from "../../../configs";
import { fileteredClientData, fileteredData, getPoliciesGeneralData, submitPolicy } from "../../features/policies";

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


export default function CreatePoliza() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // states
    const [selectSubBranch, setselectSubBranch] = useState([
        {
            value: '',
            optionName: ''
        }
    ])

    const [generalSelects, setgeneralSelects] = useState([
        {
            value: '',
            optionName: ''
        }
    ])

    const [selectedBranch, setSelectedBranch] = useState({
        id: 1,
        value: 'Personas'
    })
    const user = useSelector((state) => state.users);
    const router = useRouter()

    const handleBranchChange = (text,id) => setSelectedBranch({
        id,
        value: text
    })

    const classes = {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "",
    }
    const selectSubBranchData = {
        classes,
        name: 'subBranch',
        text: 'Sub Ramo',
        register,
        // validate,
        errors
    }

    // diferentes branchs
    const buttonsBranch = [
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Vehiculos',2),
            text: 'Vehiculos'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Viajes',3),
            text: 'Viajes'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Patrimoniales',4),
            text: 'Patrimoniales'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Personas',1),
            text: 'Personas'
        }
    ]
    // generals input
    const inputData = [
        // {
        //     id: 1,
        //     name: "insuranceCarrierId",
        //     type: "text",
        //     placeholder: "",
        //     register,
        //     errors,
        //     text: "Aseguradora",
        //     classes
        // },
        {
            id: 2,
            name: "policyNum",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Numero de Poliza",
            classes
        },
        {
            id: 3,
            name: "insuredValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor Asegurado",
            classes
        },
        // {
        //     id: 4,
        //     name: "subBranchId",
        //     type: "text",
        //     placeholder: "",
        //     register,
        //     errors,
        //     text: "Sub-Ramo",
        //     classes: {
        //         label: "text-sm font-medium text-gray-900 block mb-2",
        //         input:
        //             "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        //         // div: "col-span-6 sm:col-span-3",
        //     },
        // },
        {
            id: 5,
            name: "Risk",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Riesgo",
            classes
        },
        {
            id: 6,
            name: "Renovable",
            type: "checkbox",
            placeholder: "",
            register,
            errors,
            text: "Renovable?",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                // input:
                //     "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                // div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 7,
            name: "primeValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor de la Prima",
            classes
        },
        {
            id: 8,
            name: "AnnexValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor de Anexos",
            classes
        },
        {
            id: 9,
            name: "comission",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Comision",
            classes
        },
        {
            id: 10,
            name: "comissionPolicyStatus",
            type: "checkbox",
            placeholder: "",
            register,
            errors,
            text: "Comision Pagada?",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                // input:
                //     "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                // div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 11,
            name: "ValorFinalizacion",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor de Finalizacion",
            classes
        },
        {
            id: 12,
            name: "Total",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor Total",
            classes
        },
    ];
    const vehicleInputData = [...inputData,
    {
        id: 13,
        name: "brand",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Marca",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 14,
        name: "class",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Clase",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 15,
        name: "model",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Modelo",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 16,
        name: "vehicleType",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Tipo de Vehiculo",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 17,
        name: "serviceType",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Tipo de Servicio",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 18,
        name: "gasConverted",
        type: "checkbox",
        placeholder: "",
        register,
        errors,
        text: "Convertido a gas",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 19,
        name: "vehicleAge",
        type: "number",
        placeholder: "",
        register,
        errors,
        text: "Edad del Vehiculo",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    ]
    const travelInputData = [...inputData,
    {
        id: 20,
        name: "startCountry",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Pais de Salida",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 21,
        name: "endCountry",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Pais Destino",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 1,
        name: "startDate",
        type: "date",
        placeholder: "",
        register,
        errors,
        text: "Fecha de Salida",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 22,
        name: "endDate",
        type: "date",
        placeholder: "",
        register,
        errors,
        text: "Fecha de Llegada",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    ]
    const patrimonialInputData = [...inputData,
    {
        id: 23,
        name: "type",
        type: "text",
        placeholder: "",
        register,
        errors,
        text: "Tipo de Edificacion",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 24,
        name: "totalValue",
        type: "number",
        placeholder: "",
        register,
        errors,
        text: "Valor Total",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 25,
        name: "machineryValue",
        type: "number",
        placeholder: "",
        register,
        errors,
        text: "Valor de Maquinaria",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    {
        id: 26,
        name: "furnitureValue",
        type: "number",
        placeholder: "",
        register,
        errors,
        text: "Valor de Inmuebles",
        classes: {
            label: "text-sm font-medium text-gray-900 block mb-2",
            input:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
            // div: "col-span-6 sm:col-span-3",
        },
    },
    ]
    const personInputData = [...inputData]

    const selectGroupData = [
        {
            id: 28,
            classes,
            register,
            errors,
            name: 'insuranceCarrier',
            text: "Aseguradora"
        },
        {
            id: 29,
            classes,
            register,
            errors,
            name: 'clients',
            text: "Clientes"
        },
        {
            id: 30,
            classes,
            register,
            errors,
            name: 'agents',
            text: "Agentes"
        },
        {
            id: 31,
            classes,
            register,
            errors,
            name: 'policyStatus',
            text: "Estado de la Poliza"
        },
        {
            id: 32,
            classes,
            register,
            errors,
            name: 'relation',
            text: "Relacion a poliza"
        },
        {
            id: 33,
            classes,
            register,
            errors,
            name: 'periodicity',
            text: "Periodicidad"
        },
        {
            id: 34,
            classes,
            register,
            errors,
            name: 'currency',
            text: "Moneda"
        },
    ];

    // const all

    console.log(generalSelects);
    const vehicleForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        selectGroupData.map((el,index) => <SelectGroup optionData={generalSelects[index]} {...el} />),
        vehicleInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]
    const personForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        selectGroupData.map((el,index) => <SelectGroup optionData={generalSelects[index]} {...el} />),
        personInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]
    const travelsForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        selectGroupData.map((el,index) => <SelectGroup optionData={generalSelects[index]} {...el} />),
        travelInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]
    const patrimonialsForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        selectGroupData.map((el,index) => <SelectGroup optionData={generalSelects[index]} {...el} />),
        patrimonialInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]

    // la estate machin
    const stateMachine = {
        Vehiculos: vehicleForm,
        Personas: personForm,
        Viajes: travelsForm,
        Patrimoniales: patrimonialsForm,
    }

    const postStateMachine = {
        Vehiculos: 'vehicle',
        Personas: '',
        Viajes: 'travel',
        Patrimoniales: 'patrimonial',
    }

    function filterSubBranch(branchs) {
        return branchs.map(el => {
            return {
                value: el.id,
                optionName: el.name
            }
        })
    }

    // se encarga de actualizar el form
    useEffect(() => {
        async function getSubranches(branchId) {
            console.log(user, "user");
            if (!user.token) {
                router.push("/auth")
            }

            const apiUrl = config.apiUrl();
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${user.token}`);

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            try {
                const response = await fetch(`${apiUrl}/sub-branchs/branches/${branchId}`, requestOptions);
                const data = await response.json();
                return filterSubBranch(data)
            } catch (error) {
                console.error(error);
                return;
            }
        }
        getSubranches(selectedBranch.id).then(data => setselectSubBranch(data))
    }, [selectedBranch])

    // corre al principio y ya
    useEffect(() => {
        Promise.all([
            getPoliciesGeneralData(user,router,config,'insurance-carrier',fileteredData),
            getPoliciesGeneralData(user,router,config,'clients',fileteredClientData),
            getPoliciesGeneralData(user,router,config,'agents',fileteredClientData),
            getPoliciesGeneralData(user,router,config,'policy-status',fileteredData),
            getPoliciesGeneralData(user,router,config,'relation-policy-status',fileteredData), 
            getPoliciesGeneralData(user,router,config,'periodicities',fileteredData),
            getPoliciesGeneralData(user,router,config,'currencies',fileteredData),
        ]).then(value => {
            setgeneralSelects(value)
        })
    },[])

    function onSubmit(data) {
        console.log(data);
        const serviceRoute = postStateMachine[selectedBranch.value]
        submitPolicy(user,router,config,serviceRoute,data)
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <>
            <Layout title="Crear Poliza">
                <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                    <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                        {buttonsBranch.map((el, i) => <ButtonIcon key={i} {...el} />)}
                    </div>
                </div>

                <form  className=" w-full bg-white p-16">
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {stateMachine[selectedBranch.value]}
                    </div>
                    <button onSubmit={handleSubmit(onSubmit)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </Layout>
        </>
    )
}