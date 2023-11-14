import React from 'react';
import { useParams } from 'react-router-dom';
import { utilisateursData } from './User';
import './User.css'


const UserDetails = () => {
    const { userID } = useParams();
    const user = utilisateursData.find((utilisateur) => utilisateur.id === parseInt(userID));

    const calculateAge = (birthDate) => {
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age;
      };

  if (!user) {
    return <div>Utilisateur non trouvé</div>;
  }
  return (
    <div className='container'>
      <h2 className='Userdetail'>Détails de l'utilisateur</h2>
      <table className="table">
        <thead>
          <tr>
            <th className='infogen'>Informations Generales</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='info'>Nom</td>
            <td>{user.nom}</td>
          </tr>
          <tr>
            <td className='info'>Prénom</td>
            <td>{user.prenom}</td>
          </tr>
          <tr>
            <td className='info'>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className='info'>Adresse</td>
            <td>{user.adresse}</td>
          </tr>
          <tr>
            <td className='info'>Tel</td>
            <td>{user.tel}</td>
          </tr>
          <tr>
            <td className='info'>Date de naissance</td>
            <td>{user.birthDate}</td>
          </tr>
          <tr>
            <td className='info'>Age</td>
            <td>{calculateAge(user.birthDate)}</td>
          </tr>
        </tbody>
      </table>

      <h4 className='poss'>Possessions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Valeur</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {user.possessions.map((possession) => (
            <tr key={possession.id}>
              <td>{possession.nom}</td>
              <td>{possession.valeur}</td>
              <td>{possession.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
