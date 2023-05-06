import type { NextPage } from "next";

type HeaderProps = {
    sair(): void,
    showModal():void,
    login: string
}
export const Header : NextPage<HeaderProps> = ({sair, showModal, login}) => {
    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <button onClick={showModal}><span>+</span>Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá, {login}</span>
                <img src="/exit-mobile.svg" alt="Sair" onClick={sair}/>
            </div>
            <div className="desktop">
                <span>Olá, {login}</span>
                <img src="/exit-desktop.svg" alt="Sair" onClick={sair}/>
            </div>
        </div>
    );
}