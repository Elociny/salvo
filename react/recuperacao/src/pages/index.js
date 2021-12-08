import { Div } from './styled';

import { useState } from 'react';

import Api from '../services/api';
const api = new Api();

export default function Home() {
    const [chat, setChat] = useState([]);
    
    const atualizar = async () => {
        const mensagens = await api.listarMensagens(1);
        setChat(mensagens)
    }

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
                        <input type="text" placeholder="" ></input>
                    </div>

                    <div className="botao">
                        <button>OK</button>
                    </div>
                </div>

                <div className="row">
                    <div className="titulo">
                        Listar
                    </div>

                    <div className="botao">
                        <button onClick={atualizar}>OK</button>
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
                
                    {chat.map (x =>
                        <tbody>
                            <tr >
                                <td>{x.tb_nicole.id_nome}</td>
                                <td>{x.tb_nicole.nm_nome}</td>
                            </tr>
                        </tbody> 
                    )}
                    </table>
                </div>
            </div>
        </Div>
    );
}