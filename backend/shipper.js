export async function shipper(data, cooldown = 10) {
  console.log(data);
  data.forEach((elm) => {
    console.log("aa");
    setTimeout(() => {
      console.log(elm);
    }, cooldown);
  });
  return null;
}
