export async function apiGetInfo()
{
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(5000);
    console.log('wait 5s');
}