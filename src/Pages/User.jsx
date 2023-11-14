import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './User.css'



export const utilisateursData = [
  {
    id: 1,nom: 'Ishak',prenom: 'Nesrine',email: 'nesrineissac01@gmail.com',adresse: '4 allée Fernand Pelloutier',tel: '0767450390',birthDate: '1998-05-14',
    possessions: [
      { id: 1, nom: "Ordinateur portable", valeur: 800, type: "Électronique" },
      {id: 6, nom: "Macbook", valeur: 500, type: "Électronique"},
      { id: 11, nom: "bracelet intelligent", valeur: 100, type: "Électronique"}
    ]
  },
  {
    id: 2,nom: 'Doe',prenom: 'John',email: 'john.doe@example.com',adresse: '123 Main Street',tel: '1234567890',birthDate: '1985-10-25',
    possessions: [
      { id: 2, nom: "Vélo", valeur: 300, type: "Sport"},
      { id: 7, nom: "table", valeur: 320, type: "mobilier"}
    ]
  },
  {
    id: 3,nom: 'Dupont',prenom: 'Alice',email: 'alice.dupont@example.com',adresse: '456 Oak Avenue',tel: '9876543210',birthDate: '1990-08-18',
    possessions: [
      { id: 3, nom: "Livre", valeur: 23.95, type: "Culture" },
      { id: 8, nom: "appareil photo DSLR", valeur: 800, type: "Électronique"}
    ]
  },
  {
    id: 4,nom: 'Smith',prenom: 'Emma',email: 'emma.smith@example.com',adresse: '789 Maple Lane',tel: '5551234567',birthDate: '1982-03-30',
    possessions: [
      { id: 4, nom: "televion 4k", valeur: 1200, type: "Électronique" },
      { id: 9, nom: "console de jeux Xbox Series X", valeur: 500, type: "Électronique"}
    ]
  },
  {
    id: 5,nom: 'shaiek',prenom: 'Henny',email: 'henny.shaiek@example.com',adresse: '789 Maple Lane',tel: '3378468398',birthDate: '1982-03-30',
    possessions: [
      { id: 5, nom: "iphone 14 plus", valeur: 1500, type: "Électronique"},
      { id: 10, nom: "vélo de montagne", valeur: 600, type: "Sport et loisir"}
    ]
  }];

const User = () => {

  const [utilisateurs, setUtilisateurs] = useState(utilisateursData);

  const calculateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  };
  const handleDelete = (id) => {
    const updatedUtilisateurs = utilisateurs.filter((utilisateur) => utilisateur.id !== id);
    setUtilisateurs(updatedUtilisateurs);
    console.log(`Suppression de l'utilisateur avec l'ID : ${id}`);
  };
  return (
    <div className="container mt-4">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Email</th>
          <th scope="col">Adresse</th>
          <th scope="col">Téléphone</th>
          <th scope="col">Date de naissance</th>
          <th scope="col">Âge</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {utilisateurs.map((utilisateur) => (
          <tr key={utilisateur.id}>
            <td> <Link to={`/users/${utilisateur.id}`}>{utilisateur.nom}</Link></td>
            <td>{utilisateur.prenom}</td>
            <td>{utilisateur.email}</td>
            <td>{utilisateur.adresse}</td>
            <td>{utilisateur.tel}</td>
            <td>{utilisateur.birthDate}</td>
            <td>{calculateAge(utilisateur.birthDate)}</td>
            <td>
              <button className='btn btn-danger' onClick={() => handleDelete(utilisateur.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default User
