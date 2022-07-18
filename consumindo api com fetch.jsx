useEffect(()=>{
    fetch('https://api-cfb.lauriciomalek.repl.co')
    .then(res=>res.json())
    .then((res)=>{
        setCarros(res)
    })
})


//para usar basta criar um state e passa como paratro um array vazio
//EX
div
const [nome,setNome] = useState([])

// depois basta usar dentro do html usando o ponto map para iterar sobre cado objeto 
// obtido da API
//ex

return(
<div>
    {nome.map(nome => (
         <h3>{nome.marca}</h3>
         ))}
</div>
);

// 
