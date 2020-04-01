export default async function fetchData(url: string) {
    console.log('fetch');

    const res = await fetch(url);

    return await res.json();
}