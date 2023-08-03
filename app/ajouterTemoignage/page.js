
'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import{addTemoignage,deleteTemoignage, getTemoignage} from "@/store/reducers/temoignageReducer"



const TemoignageFormulaire = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const temoignages = useSelector(state => state.temoignage.temoignages)
  const [state, setState] = useState({    // Valeurs de chaque champ de la forme
    prenom: '',
    nom: '',
    email: '',
    temoignage: '',
  
})
const [nomError, setNomError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [temoignageError, setTemoignageError] = useState('');
  // Custom validation for "nom" field: Allow only letters
  const namePattern = /^[A-Za-z]+$/;
  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
}

const isValidEmail = (email) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return emailRegex.test(email);
};
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!isValidEmail(state.email)) {
      setEmailError('Veuillez saisir une adresse email valide.');
      return;
    }
    

    // Validate testimonial
    if (state.temoignage.trim().length === 0) {
      setTemoignageError('Le témoignage ne peut pas être vide.');
      return;
    } else if (state.temoignage.trim().length > 250) {
      setTemoignageError('Le témoignage ne peut pas dépasser 250 caractères.');
      return;
    }
    let newId;
  if (temoignages.length === 0) {
    newId = 1; // Set the first ID to 1 if no feedbacks are available
  } else {
    const lastTemoignage = temoignages[temoignages.length - 1];
    newId = lastTemoignage.id + 1; // Set the ID to the last feedback's ID plus 1
  }
   
    dispatch(addTemoignage({ ...state, id:newId }))
    setState(prev => ({
        ...prev,
        prenom: '',
        nom: '',
        email: '',
        temoignage: '',
        
    }))                                                
   
}

  

  return ( <>
    
    <div>
      <form onSubmit={handleSubmit} className="temoignageForm mt-20 flex-grow  max-w-lg mx-auto bg-gray-300 p-20 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Laisser un témoignage</h2>

        <div className="mb-4">
             <label className="form-label block text-gray-400 font-bold" htmlFor='prenom'>Prenom</label>
              <input className="form-control w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500" value={state.prenom} onChange={handleChange} type='text' name='prenom' id='prenom' placeholder='Entrer le prenom' />
        </div>
        <div className="mb-4">
            <label className="form-label block text-gray-400 font-bold" htmlFor='nom'>Nom</label>
              <input className="form-control w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500" value={state.nom} onChange={handleChange} type='text' name='nom' id='nom' placeholder='Entrer le nom' />
         </div>
                  
        <div className="mb-4">

          <label htmlFor="email" className="block text-gray-400 font-bold">Email :</label>
          <input
            type="email"
            id="email"
            name="email" 
            value={state.email} onChange={handleChange}
            required
            className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500 ${emailError ? "border-red-500" : "border-gray-700"}`}
          />
          {emailError && <div className="text-red-500 mt-1">{emailError}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="temoignage" className="block text-gray-400 font-bold">Témoignage :</label>
          <textarea
            id="temoignage"
            name="temoignage"
            value={state.temoignage} onChange={handleChange}
            className={`w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500 ${temoignageError ? "border-red-500" : "border-gray-700"}`}
          ></textarea>
          {temoignageError && <div className="text-red-500 mt-1">{temoignageError}</div>}
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Envoyer
        </button>
      </form>
    </div>
    </>
  );
};

export default TemoignageFormulaire;


