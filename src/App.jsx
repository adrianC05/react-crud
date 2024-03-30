import React, { useEffect } from "react";
import CrudForm from "./components/CrudForm";
import CrudTable from "./components/CrudTable";
import { useState } from "react";

const App = () => {
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState(() => {
    const saveEquipos = window.localStorage.getItem("equipos");
    if (saveEquipos) {
      return JSON.parse(saveEquipos);
    } else {
      return [];
    }
  });

  // Guardar datos en el localStorage
  useEffect(() => {
    window.localStorage.setItem("equipos", JSON.stringify(equipos));
  }, [equipos]);

  // Insercion de datos
  const addEquipo = (equipo) => {
    setEquipos([...equipos, equipo]);
  };

  // Edicion de datos
  const editEquipo = (equipo) => {
    const newEquipo = equipos.map((item) =>
      item.id === equipo.id ? equipo : item
    );
    setEquipos(newEquipo);
    setEditData(null);
  };

  // Eliminacion de datos
  const deleteEquipo = (id) => {
    const isDelete = window.confirm(
      `¿Estas seguro de eliminar el equipo: ${id}?`
    );

    if (isDelete) {
      const newEquipo = equipos.filter((item) => item.id !== id);
      setEquipos(newEquipo);
    } else {
      alert("Ups! Algo salio mal");
      return;
    }
  };

  return (
    <>
      <h2 className="font-extrabold text-3xl text-center m-4">
        CRUD de Equipos de Futbol
      </h2>
      <CrudForm
        addEquipo={addEquipo}
        editData={editData}
        editEquipo={editEquipo}
      />
      <CrudTable
        equipos={equipos}
        setEditData={setEditData}
        deleteEquipo={deleteEquipo}
      />
    </>
  );
};
export default App;
