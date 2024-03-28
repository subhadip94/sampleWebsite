// function myForm() {
//     let formData = document.getElementById("formData")
//     formData.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let name = document.getElementById("inputName")
//         let population = document.getElementById("inputPopulation")
//         console.log(
//             `This form has a username of ${name.value} and password of ${population.value}`
//         );
//     });
// }
async function myForm() {
    // let formData = new FormData()
    const form = document.querySelector("#formData")
    let name = document.getElementById("inputName")?.value
    let population = document.getElementById("inputPopulation")?.value
    formData = new FormData(form)
    formData.append("name", name)
    formData.append("population", population)
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log(formData[0]);
        // back end data extraction part
        // for (const [key, value] of formData) {
        //     console.log('k',key, value)
        // }
    })
    const data = { "name": `${name}`, "population": `${population}` }
    // console.log('k', data)
    const response = await fetch("http://192.168.1.168:3001/post", {
        mode: "cors",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log('index=',response.json());

}