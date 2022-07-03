import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputGroup from "../../components/forms/InputGroup";
import SelectGroup from "../../components/forms/SelectGroup";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { config } from "../../../configs";
import { fileteredClientData, fileteredData, getPoliciesGeneralData, submitPolicy } from "../../features/policies";
import { getInputData, getPatrimonialInputData, getTravelInputData, getVehicleInputData } from "../../data/polizas/inputs";
import { getSelectPolizaData } from "../../data/polizas/select";
import { polizaSchema } from "../../data/polizas/schema";

const schema = polizaSchema();


export default function CreatePoliza() {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // states
    const [selectSubBranch, setSelectSubBranch] = useState([
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

    const handleBranchChange = (text, id) => setSelectedBranch({
        id,
        value: text
    })

    const classes = {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "",
        error: "text-red-700",
    }

    const selectSubBranchData = {
        classes,
        name: 'subBranchId',
        text: 'Sub Ramo',
        register,
        // validate,
        errors
    }
    // diferentes branchs
    const buttonsBranch = [
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Vehiculos', 2),
            text: 'Vehiculos'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Viajes', 3),
            text: 'Viajes'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Patrimoniales', 4),
            text: 'Patrimoniales'
        },
        {
            buttonClass: 'w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleBranchChange('Personas', 1),
            text: 'Personas'
        }
    ]
    // generals input
    const inputData = getInputData(register, errors, classes);

    const vehicleInputData = [...inputData,
    ...getVehicleInputData(register, errors, classes)
    ]
    const travelInputData = [...inputData,
    ...getTravelInputData(register, errors, classes)
    ]
    const patrimonialInputData = [...inputData,
    ...getPatrimonialInputData(register, errors, classes)
    ]
    const personInputData = [...inputData]

    const selectGroupData = getSelectPolizaData(register, errors, classes);

    const getSelectGroupData = selectGroupData.map((el, index) => {
        if (generalSelects.length > 1) {
            return <SelectGroup optionData={generalSelects[index]} {...el} />
        } else {
            return <SelectGroup optionData={generalSelects} {...el} />
        }
    })

    // console.log(generalSelects, 'generalSelects')
    const vehicleForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        getSelectGroupData,
        vehicleInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]
    const personForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        getSelectGroupData,
        personInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]

    // console.log(personForm, 'personForm')
    const travelsForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        getSelectGroupData,
        travelInputData.map(el => <InputGroup key={el.id} {...el} />)
    ]
    const patrimonialsForm = [
        <SelectGroup optionData={selectSubBranch} {...selectSubBranchData} />,
        getSelectGroupData,
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
            // console.log(user, "user");
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
        getSubranches(selectedBranch.id).then(data => setSelectSubBranch(data))
    }, [selectedBranch])

    // corre al principio y ya
    useEffect(() => {
        // console.log(generalSelects, 'generalSelects antes')
        Promise.all([
            getPoliciesGeneralData(user, router, config, 'insurance-carrier', fileteredData),
            getPoliciesGeneralData(user, router, config, 'clients', fileteredClientData),
            getPoliciesGeneralData(user, router, config, 'agents', fileteredClientData),
            getPoliciesGeneralData(user, router, config, 'policy-status', fileteredData),
            getPoliciesGeneralData(user, router, config, 'relation-policy-status', fileteredData),
            getPoliciesGeneralData(user, router, config, 'periodicities', fileteredData),
            getPoliciesGeneralData(user, router, config, 'currencies', fileteredData),
        ]).then(value => {
            // console.log(value, "value");
            setgeneralSelects(value)
            // console.log(generalSelects, "generalSelects");
        })
    }, [])

    function onSubmit(data) {
        console.log(data, "data");
        const serviceRoute = postStateMachine[selectedBranch.value]
        data.branchTypeId = parseInt(selectedBranch.id)

        console.log(serviceRoute, "serviceRoute");

        submitPolicy(user, router, config, serviceRoute, data)
            .then(response => {
                console.log(response);
                if (response) {
                    router.push("/polizas")
                }
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

                <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {stateMachine[selectedBranch.value]}
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir</button>
                </form>

            </Layout>
        </>
    )
}