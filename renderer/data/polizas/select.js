export function getSelectPolizaData(register, errors, classes, polizas) {
    return [
        {
            id: 28,
            classes,
            register,
            errors,
            name: 'insuranceCarrierId',
            text: "Aseguradora",
            selectedIndex : polizas?.InsuranceCarrierId
        },
        {
            id: 29,
            classes,
            register,
            errors,
            name: 'clientId',
            text: "Clientes",
            selectedIndex : polizas?.ClientHasPolicies[0].clientId
        },
        {
            id: 30,
            classes,
            register,
            errors,
            name: 'agentId',
            text: "Agentes",
            selectedIndex : polizas?.AgentContracts[0].agentId
        },
        {
            id: 31,
            classes,
            register,
            errors,
            name: 'policyStatusId',
            text: "Estado de la Poliza",
            selectedIndex : polizas?.policyStatusId
        },
        {
            id: 32,
            classes,
            register,
            errors,
            name: 'relationId',
            text: "Relacion a poliza",
            selectedIndex : polizas?.ClientHasPolicies[0].relationId
        },
        {
            id: 33,
            classes,
            register,
            errors,
            name: 'periodicityId',
            text: "Periodicidad",
            selectedIndex : polizas?.ClientHasPolicies[0].ClientHasTaker[0].PolicyDetails[0].periodicityId
        },
        {
            id: 34,
            classes,
            register,
            errors,
            name: 'currencyId',
            text: "Moneda",
            selectedIndex: polizas?.ClientHasPolicies[0].ClientHasTaker[0].PolicyDetails[0].currencyId
        }
    ]
}