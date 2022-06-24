import { yupResolver } from "@hookform/resolvers/yup";
import InputGroup from "../../components/forms/InputGroup";
import SelectGroup from "../../components/forms/SelectGroup";

export function CreatePoliza() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const inputData = [
        {
            id: 1,
            name: "insuranceCarrierId",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Aseguradora",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 2,
            name: "policyNum",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Numero de Poliza",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 3,
            name: "insuredValue",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Valor Asegurado",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 4,
            name: "subBranchId",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Sub-Ramo",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 5,
            name: "Risk",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Riesgo",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
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
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 7,
            name: "primeValue",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Valor de la Prima",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 8,
            name: "AnnexValue",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Valor de Anexos",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 9,
            name: "comission",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Comision",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
        {
            id: 10,
            name: "comissionPolicyStatus",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Comision",
            classes: {
                label: "text-sm font-medium text-gray-900 block mb-2",
                input:
                    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
                div: "col-span-6 sm:col-span-3",
            },
        },
    ];

    const allInputLabelGroup = inputData.map(el => <InputGroup key={el.id} {...el} />)
    const allSelect = inputData.map(el => <SelectGroup key={el.id} {...el} />)

    const data = [];

    return data.map(el => el) 
}