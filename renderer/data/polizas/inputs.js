export function getInputData(register, errors, classes) {
    return [
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
        {
            id: 35,
            name: "periodStartDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Inicio de Poliza",
            classes
        },
        {
            id: 36,
            name: "periodEndDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Fin de Poliza",
            classes
        },
        {
            id: 37,
            name: "renewal",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Numero de Renovaciones",
            classes
        },
    ];
}


export function getVehicleInputData(register, errors, classes) {

    return [
        {
            id: 13,
            name: "brand",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Marca",
            classes,
        },
        {
            id: 14,
            name: "class",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Clase",
            classes,
        },
        {
            id: 15,
            name: "model",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Modelo",
            classes,
        },
        {
            id: 16,
            name: "vehicleType",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Tipo de Vehiculo",
            classes,
        },
        {
            id: 17,
            name: "serviceType",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Tipo de Servicio",
            classes,
        },
        {
            id: 18,
            name: "gasConverted",
            type: "checkbox",
            placeholder: "",
            register,
            errors,
            text: "Convertido a gas",
            classes,
        },
        {
            id: 19,
            name: "vehicleAge",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Edad del Vehiculo",
            classes,
        },
    ];
}

export function getTravelInputData(register, errors, classes) {
    return [
        {
            id: 20,
            name: "startCountry",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Pais de Salida",
            classes,
        },
        {
            id: 21,
            name: "endCountry",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Pais Destino",
            classes,
        },
        {
            id: 55,
            name: "startDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Salida",
            classes,
        },
        {
            id: 22,
            name: "endDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Llegada",
            classes,
        }]
}

export function getPatrimonialInputData(register, errors, classes) {
    return [
        {
            id: 23,
            name: "type",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Tipo de Edificacion",
            classes,
        },
        {
            id: 24,
            name: "totalValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor Total",
            classes,
        },
        {
            id: 25,
            name: "machineryValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor de Maquinaria",
            classes,
        },
        {
            id: 26,
            name: "furnitureValue",
            type: "number",
            placeholder: "",
            register,
            errors,
            text: "Valor de Inmuebles",
            classes,
        },
    ]
}