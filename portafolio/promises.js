const ApiUrl = "https://smartpipes.cloud/api/production-line/factories/";
const ApiUrl2 = "";

async function fetchData(url) {
    return await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`error: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return null;
        });
}

fetchData(ApiUrl).then(data =>{
    if (data && data[0]) {
        data.map(factory => {
            console.log(`ID: ${factory.factory_id}, NAME: ${factory.name}, STATUS: ${factory.status}`);
        })
    }
})
.finally(console.log("Fetched"))
.catch(error => {
    console.error(error);
})