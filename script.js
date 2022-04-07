document.querySelector("button").onclick=function(){
    fetch("https://reqres.in/api/users?page=2")
    .then(function(resposta){
        return resposta.json()
    }).then(
    function(resposta){
            let tbody=document.querySelector("#users")
            console.log(resposta)
            resposta.data.forEach(
                function(user){
                    let tr=document.createElement("tr")

                    let tdEmail=document.createElement("td")
                    tdEmail.append(
                        document.createTextNode(user.email)
                    )
                    tr.append(tdEmail)

                    let tdFirst_name=document.createElement("td")
                    tdFirst_name.append(
                        document.createTextNode(user.first_name)
                    )
                    tr.append(tdFirst_name)

                    let tdLast_name=document.createElement("td")
                    tdLast_name.append(
                        document.createTextNode(user.last_name)
                    )
                    tr.append(tdLast_name)

                    let tdAvatar=document.createElement("td")
                    tdAvatar.append(
                        document.createTextNode(user.avatar)
                    )
                    tr.append(tdAvatar)
                        tbody.append(tr)

                }
            )
                }
                )
            }