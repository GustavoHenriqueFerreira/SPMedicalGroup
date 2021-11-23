export default function SituacaoConsulta(situacao) {

    switch (situacao.situacao) {
        default:
            return (
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