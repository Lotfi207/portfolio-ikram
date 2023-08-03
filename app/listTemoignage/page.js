'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import{deleteTemoignage, getTemoignage} from "@/store/reducers/temoignageReducer"
function page() {
 
   const temoignages = useSelector(state => state.temoignage.temoignages)
   const dispatch=useDispatch()
   const router = useRouter()
   function temoignage() {  // Supprimer l'element clique
    dispatch(getTemoignage())
   }
   function supprimer(id) {  // Supprimer l'element clique
    dispatch(deleteTemoignage(id))

  }
  function goToEdit(id) {   // Rediriger vers la page edit-user avec la valeur de l'element clique
    dispatch(getTemoignage(id))
    router.push(`/edit-temoignage/${id}`)
}
   useEffect(() => {
    temoignage()
  }, [dispatch]);



  return (
    

           
    <div className="mx-auto max-w-3xl">
    {temoignages.length ? (
      <>
        <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs ajoutés</h1>
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Prenom</th>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Témoignage</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {temoignages.map(temoignage => (
              <tr key={temoignage.id} className="odd:bg-gray-100 even:bg-white border-b border-gray-200">
                <td className="px-4 py-2">{temoignage.id}</td>
                <td className="px-4 py-2">{temoignage.prenom}</td>
                <td className="px-4 py-2">{temoignage.nom}</td>
                <td className="px-4 py-2">{temoignage.email}</td>
                <td className="px-4 py-2">{temoignage.temoignage}</td>
                <td className="px-4 py-2">
                  <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none" onClick={() => goToEdit(temoignage.id)}>Modifier</button>
                  <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none" onClick={() => supprimer(temoignage.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <p>Aucun témoignage trouvé.</p>
    )}
  </div>

    
  )
}

export default page