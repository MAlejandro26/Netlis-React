import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {listarMedico} from "../../actions/MedicoAction";

const TablaMedico = () => {
    const[tableData, setTableData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const {data:response}=await listarMedico();
                setTableData(response);
            }catch(error){
                console.error(error.message);
            }
        }
        fetchData();
    },[]);
/* 
    function enviarParams (e, idpaciente) {

		e.preventDefault();
		window.open('/ordenpaciente?idpaciente='+idpaciente, '_parent');
	} */

    return (
        <div className="container mt-5  ">
        <div className="card shadow mb-4  ">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Pacientes</h6>
        </div>
        <div className="card-body mb-5">
{/* 		<Link to="/create_sexo">
		<button className="btn btn-outline-primary">Nuevo sexo</button>
		</Link> */}
		<br/>
		
		<table class="table table-bordered table-striped">
               
			<thead>
                 <th scope="col">ID</th>
				  <th scope="col">Nombre</th>
				  <th scope="col">Apellido</th>
			</thead>
			
			<tbody>
				{tableData.map((medico)=>(
					<tr key="{medico.idTblMedico}">
					<td>{medico.idTblMedico}</td>
					<td>{medico.nombres}</td>
                    <td>{medico.apellidos}</td>
{/* 					<td>
						<a data-toggle="tooltip" title="Visualizar ordenes" href="#" onClick={e => enviarParams(e, paciente.idPaciente)}><i className="fas fa-archive"></i></a>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<a data-toggle="tooltip" title="Agregar Nueva Orden" href="#" onClick={e => enviarParamsForm(e, paciente.idPaciente)}><i className="fas fa-folder-plus"></i></a>
					</td> */}
					</tr>
				))}
			</tbody>
{/* 			<tfoot>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Primer Nombre</th>
				  <th scope="col">Primer Apellido</th>
				  <th scope="col">Opciones de Orden</th>
				</tr>
			</tfoot> */}
		</table>

       
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
    );
}

export default TablaMedico;