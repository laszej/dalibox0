const indeksy = document.getElementById("indeksy")
const button = document.getElementById("button")

let parts
async function login() {
       const response = await fetch("./all/all.txt")
     
  
      if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        console.log(response.status)
  
      const data = await response.text()
      console.log(data)
      console.log(typeof data)

       parts =  data.split("Zd")
      console.log(parts)
      console.log(typeof parts)
      parts.forEach((item, index)=> {let line = document.createElement("p")
      line.innerHTML = `<b>indeks: ${index}</b> ${item}`
      indeksy.append(line)})
      
      return data
  }

  button.addEventListener("click", login)

  
