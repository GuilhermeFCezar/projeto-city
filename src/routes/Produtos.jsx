import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import '../css/produto.css'

function Produtos() {
  //criando a variavel id e usando o HOOK useParams
  let { id } = useParams();
  //criando o useState do novoProduto
  const [novoproduto, setNovoProduto] = useState({
    id,
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  });
//criando a função handleChange

const handleChange =(e)=>{
//...(spred) pega os dados antigos e junta com os dados novos
setNovoProduto({...novoproduto,[e.target.name]:e.target.value})
}
//criando o metodo put e post

let metodo ="post";
if(id){
  metodo="put"
}
const handleSubmit =(e)=>{
e.preventDefault();
fetch(`http://localhost:5000/Bonecos/${id ? id :"" }
`,{
 method:metodo,
 headers:{
    'Content-Type':'application/json',
 },
 body:JSON.stringify(novoproduto),
}).then(()=>{
  window.location="/listaprodutos"
})
}

useEffect(()=>{
  if(id){
    fetch(`http://localhost:5000/Bonecos/${id}`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setNovoProduto(data);
    })
  }

 },[id]);





  return (
    <>
    <div className='div-form'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          name="nome"
          value={novoproduto.nome}
          placeholder="Digite o nome do Produto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao"
          value={novoproduto.descricao}
          placeholder="Digite a descricao do produto"
          onChange={handleChange}
        />

        <input
          type="text"
          name="valor"
          value={novoproduto.valor}
          placeholder="Digite o valor do produto"
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagem"
          value={novoproduto.imagem}
          placeholder="Digite a imagem do produto"
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
       
      </form>
      </div>
    </>
  );
}
export default Produtos;
