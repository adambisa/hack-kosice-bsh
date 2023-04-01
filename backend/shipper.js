export async function shipper(data, cooldown = 10) {
    data.forEach(
        ( elm ) => {
            setTimeout(() => { console.log(elm) }, cooldown);
        }
    )
    return null;
}
