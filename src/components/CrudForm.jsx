import React, { useEffect, useState } from 'react'

const CrudForm = ({ addEquipo, editData, editEquipo }) => {

  const [formData, setFormData] = useState({
    pais: '',
    equipo: '',
    id: null,
  });

  useEffect(() => {
    if(editData !== null){
      setFormData(editData)
    }else setFormData({
      pais: '',
      equipo: '',
      id: null,
    });
  }, [editData]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.equipo !== '' && formData.pais !== ''){
      if(formData.id !== null){
        editEquipo(formData);
      }else{
          formData.id = Date.now();
          formData.pais = formData.pais.trim();
          formData.equipo = formData.equipo.trim();
          addEquipo(formData);
          setFormData({
            pais: '',
            equipo: '',
            id: null,
          });
      }
    }else{
      alert('Por favor, llena todos los campos');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form className='w-full max-w-lg m-auto' onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pais">
              Pais:
            </label>
            <input  name='pais' type="text" onChange={handleChange} value={formData.pais} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Pais" />
            <p className="text-red-500 text-xs italic"> Por favor, llena este campo.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="equipo">
              Equipo:
            </label>
            <input name='equipo' type="text" onChange={handleChange} value={formData.equipo} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Equipo" />
          </div>
        </div>
        <div className="md:w-full text-center">
          <input className="shadow bg-green-500 hover:bg-green-600 mr-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value={'Enviar'} />
          <input className="shadow bg-red-500 hover:bg-red-600 ml-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="reset" value={'Cancelar'} />
        </div>
      </form>

    </>
  )
}

export default CrudForm