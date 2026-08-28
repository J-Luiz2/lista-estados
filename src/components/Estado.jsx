import './Estado.css'
function Estado({nome,sigla,regiao}) {
    return(
        <div className='cardEstado'>
            <h1><strong>{sigla}</strong></h1>
            <h2><strong>{nome}</strong></h2>
            <h3>Região: {regiao}</h3>
        </div>
    )
}

export default Estado;