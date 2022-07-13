export function fileteredData(data) {
    return data.map(el => {
        return {
            value: el.id,
            optionName: el.name
        }
    })
}

export function fileteredClientData(data) {
    console.log(data, 'client');
    return data.map(el => {
        return {
            value: el.id,
            optionName: el.Persons.name + ' ' + el.Persons.lastName
        }
    })
}

export async function getPoliciesGeneralData(user, router, config, serviceRoute, filterFunction) {
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
        const response = await fetch(`${apiUrl}/${serviceRoute}`, requestOptions);
        const data = await response.json();
        return filterFunction(data)
    } catch (error) {
        console.error(error);
        return;
    }
}


export async function submitPolicy(user, router, config, serviceRoute, data) {
    if (!user.token) {
        router.push("/auth")
    }

    const apiUrl = config.apiUrl();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(data),
    };

    console.log(requestOptions, 'requestOptions');

    try {
        const response = await fetch(`${apiUrl}/policies/${serviceRoute}`, requestOptions);
        if (response.status === 201) {
            const data = await response.json();
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function updatePolicy(user, router, config, serviceRoute, data) {
    if (!user.token) {
        router.push("/auth")
    }

    const apiUrl = config.apiUrl();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(data),
    };

    console.log(requestOptions, 'requestOptions');

    try {
        const response = await fetch(`${apiUrl}/policies/${serviceRoute}`, requestOptions);
        if (response.status === 201) {
            const data = await response.json();
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}