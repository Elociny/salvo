import { Div } from './styled';



export default function Home() {
 

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
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td>Nicole</td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
            </div>
        </Div>
    );
}