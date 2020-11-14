export const postMessageToServer = async (values) => {
    const location = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values, null, 2),
    };
    try {
        const fetchResponse = await fetch(location, settings);
        const data = await fetchResponse.json();
        console.log(data, fetchResponse);
        if (data.ok) {
            return data;
        }

    } catch (err) {
        console.log(err);
        return err;
    }
}

export const fetchData = async (firebase, fn) => { 
    const dataFundations = await firebase.db.collection("fundations").get();
    fn(dataFundations.docs.map(doc => doc.data()));
}
