import { Div } from './styled';

import { useEffect, useState } from 'react';
import Api from '../services/api';
const api = new Api();

export default function Home() {
    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState('');

    async function listando(){
        let f = await api.listarNomes();
        console.log(f)
        setNomes(f);
    }

    async function inserindo() {
        let f = await api.inserirNomes(nome);
        alert('inseriu')

        listando();
    }

    useEffect(()=> {
        listando();
    }, [])

    return (
        <Div>
            <div className="container">
                <div className="titulo">
                    Novo
                </div>

                <div className="row">
                    <div className="texto">
                        Nome:
                    </div>

                    <div className="input">
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
                    </div>

                    <div className="botao">
                        <button onClick={inserindo}>OK</button>
                    </div>
                </div>

                <div className="row">
                    <div className="titulo">
                        Listar
                    </div>

                    <div className="botao">
                        <button>OK</button>
                    </div>
                </div>

                <div className="tabela">
                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th > ID </th>
                                <th> Nome </th>
                            </tr>
                        </thead>

                        {nomes.map(item =>
                            <tbody>
                                <tr >
                                    <td> {item.id} </td>
                                    <td>{item.id_nome}</td>
                                </tr>
                            </tbody> 
                        )}
                    </table>
                </div>
            </div>
        </Div>
    );
}