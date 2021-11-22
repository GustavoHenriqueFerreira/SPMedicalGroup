export default function SituacaoConsulta(situacao) {

    switch (situacao.situacao) {
        case "Realizada":
            return (
                <div>
                    <select id={situacao.idConsulta} defaultValue="1" className="status vazio" name="status" disabled onChange={situacao.alterar}>
                    <option value="1">Realizada</option>
                    <option value="2">Cancelada</option>
                    <option value="3">Agendada</option>
                    </select>
                </div>
            )
        case 'Cancelada':
            return (
                <div>
                    <select id={situacao.idConsulta} defaultValue="2" className="status vazio" name="status" disabled onChange={situacao.alterar}>
                    <option value="1">Realizada</option>
                    <option value="2">Cancelada</option>
                    <option value="3">Agendada</option>
                    </select>
                </div>
            )
        case 'Agendada':
            return (
                <div>
                    <select id={situacao.idConsulta} defaultValue="3" className="status vazio" name="status" disabled onChange={situacao.mudar}>
                    <option value="1">Realizada</option>
                    <option value="2">Cancelada</option>
                    <option value="3">Agendada</option>
                    </select>
                </div>
            )

        default:
            return(
                <div>
                    <select id={situacao.idConsulta} className="status vazio" name="status" disabled onChange={situacao.mudar}>
                    <option value="1">Realizada</option>
                    <option value="2">Cancelada</option>
                    <option value="3">Agendada</option>
                    </select>
                </div>
            )

    }


}