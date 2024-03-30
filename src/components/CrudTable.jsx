import React from "react";

const CrudTable = ({ equipos, setEditData, deleteEquipo }) => {
  return (
    <>
      <h3 className="font-bold text-xl text-center mb-4 mt-10">
        Listado de Equipos
      </h3>

      <table className="table-fixed m-auto responsive">
        <thead>
          <tr className="bg-gray-100">
            {/* <th className='border px-4 py-2'>ID</th> */}
            <th className="border px-4 py-2">Equipo</th>
            <th className="border px-4 py-2">Pais</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.length === 0 ? (
            <td>No hay datos</td>
          ) : (
            equipos.map((equipo, index) => {
              return (
                <tr key={index}>
                  {/* <td className='border px-4 py-2'>{equipo.id}</td> */}
                  <td className="border px-4 py-2">{equipo.equipo}</td>
                  <td className="border px-4 py-2">{equipo.pais}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="shadow bg-blue-500 hover:bg-blue-600 mr-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => setEditData(equipo)}
                    >
                      Editar
                    </button>
                    <button
                      className="shadow bg-red-500 hover:bg-red-600 ml-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => deleteEquipo(equipo.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
