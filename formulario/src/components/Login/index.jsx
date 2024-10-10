import "./styled.css"

export default function Login(){
    return (
        <>
        <div className="div-principal">
            <h2>Login</h2>
            <div className="div-inputs-botao">
                <input type="text" name="usuario" id="usuario" placeholder="Usuário" />
                <input type="password" name="senha" id="senha" placeholder="Senha" />
                <button id="botao" >Enviar</button>
            </div>
        </div>
        </>
    )
}