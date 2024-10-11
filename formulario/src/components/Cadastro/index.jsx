import './stylec.css'

export default function Cadastro() {
    return (
        <>
        <section>
            <div className="Fileira-Telas">
                <div className="nome-numero-endereco">
                    <input type="text" placeholder='Nome' id='nome' />
                    <input type="number" placeholder='Número' id="numero" />
                    <input type="text" placeholder='Endereço' id='endereco' />
                    <button className='botoes'>Enviar</button>
                </div>

                <div className="email-senha">
                    <input type="email" placeholder='Seu Email' id="email" />
                    <input type="password" placeholder='Senha' id="senha" />
                    <button className='botoes'>Salvar</button>
                </div>
            </div>
        </section>
        </>
    )
}