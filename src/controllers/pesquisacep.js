const fetch = require("node-fetch");

module.exports = {

    async cep(req,res){
        var {cep} = req.body
        console.log(cep)

        var urlcorreios = "http://viacep.com.br/ws/"+cep+"/json/";

        const response = fetch(urlcorreios)
        
        .then(r =>  r.json().then(data => ({status: r.status, body: data})))
        .then(data => (()=>obj = data))
        .then(obj => console.log(obj))

        console.log(obj)
    }

}