export async function shipper(data: Array<any>, cooldown: number = 10) {
    data.forEach(
        ( elm ) => {
            setTimeout(() => { console.log(elm) }, cooldown);
        }
    )
    return null;
}
