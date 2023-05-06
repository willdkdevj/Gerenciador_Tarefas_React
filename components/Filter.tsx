/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState } from "react"

type FilterProps = {
    previsionDateStart : string,
    previsionDateEnd : string,
    status: number,
    setPrevisionDateStart(s:string):void,
    setPrevisionDateEnd(s:string):void,
    setStatus(n:number):void,
}

export const Filter : NextPage<FilterProps> = ({
    previsionDateStart, 
    previsionDateEnd, 
    status, 
    setPrevisionDateStart, 
    setPrevisionDateEnd, 
    setStatus}) => {

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="container-filter">
            <div className="title">
                <span>Tarefas</span>
                <img src="/filter.svg" alt="Filtrar tarefas" onClick={() => setShowFilters(!showFilters)}/>
                <div className="form">
                    <div>
                        <label>Data prevista de conclusão:</label>
                        <input type="date" value={previsionDateStart} onChange={e => setPrevisionDateStart(e.target.value)} placeholder="Insira a data prevista de conclusão" />
                    </div>
                    <div>
                        <label>até</label>
                        <input type="date" value={previsionDateEnd} onChange={e => setPrevisionDateEnd(e.target.value)} placeholder="Insira a data prevista de conclusão final" />
                    </div>
                    <div className="separator"/>
                    <div>
                        <label>Status</label>
                        <select value={status} onChange={e => setStatus(parseInt(e.target.value))}>
                            <option value="">Selecione um Status</option>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>
            </div>
            {showFilters && <div className="mobile-filters">
                    <div>
                        <label>Data de previsão de:</label>
                        <input type="date" value={previsionDateStart} onChange={e => setPrevisionDateStart(e.target.value)} placeholder="Insira a data prevista de conclusão" />
                    </div>
                    <div>
                        <label>Data de previsão até:</label>
                        <input type="date" value={previsionDateEnd} onChange={e => setPrevisionDateEnd(e.target.value)} placeholder="Insira a data prevista de conclusão final" />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select value={status} onChange={e => setStatus(parseInt(e.target.value))}>
                            <option value="">Selecione um Status</option>
                            <option value={0}>Todas</option>
                            <option value={1}>Ativas</option>
                            <option value={2}>Concluídas</option>
                        </select>
                    </div>
                </div>}
        </div>
    )
}