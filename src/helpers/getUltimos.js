

export const getUltmos = async() => {
    const resp = await fetch('http://localhost:8080/ultimos');
    const data = await resp.json();

    return data.ultimos;
}