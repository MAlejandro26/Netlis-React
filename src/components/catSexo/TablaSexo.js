import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {listarSexo} from "../../actions/SexoAction";

const TablaSexo = () => {
    const[tableData, setTableData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const {data:response}=await listarSexo();
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
            <h6 className="m-0 font-weight-bold text-primary">Sexos</h6>
        </div>
        <div className="card-body mb-5">
		<Link to="/create_sexo">
		<button className="btn btn-outline-primary">Nuevo sexo</button>
		</Link>
		<br/>
		
		<table class="table table-bordered table-striped">
               
			<thead>
				<tr>
				  <th scope="col">ID</th>
				  <th scope="col">Descripción</th>
				</tr>
			</thead>
			
			<tbody>
				{tableData.map((sexo)=>(
					<tr key="{sexo.idSexo}">
					<td>{sexo.idSexo}</td>
					<td>{sexo.descripcion}</td>
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

export default TablaSexo;