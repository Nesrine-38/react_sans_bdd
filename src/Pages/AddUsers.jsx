import React, { useState } from 'react';
import './User.css'


const AddUsers = ({ onAddUser }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [tel, setTel] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handleBirthDateChange = (e) => {
    const newBirthDate = e.target.value;
    setBirthDate(newBirthDate);
    setAge(calculateAge(newBirthDate));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: new Date().getTime(),
      nom,
      prenom,
      email,
      adresse,
      tel,
      birthDate,
    };

    try {
      onAddUser(newUser);
  
      // Ajouter une déclaration console.log pour afficher les détails de l'utilisateur
      console.log("Utilisateur ajouté :", newUser);
    } catch (error) {
      console.error("Erreur lors de l'ajout d'utilisateur :", error);
    }

    setNom('');
    setPrenom('');
    setEmail('');
    setAdresse('');
    setTel('');
    setBirthDate('');
    setAge(0);
  };
  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>
          <div className="col">
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="adresse" className="form-label">Adresse</label>
            <input type="text" className="form-control" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
          </div>
          <div className="col">
            <label htmlFor="tel" className="form-label">Téléphone</label>
            <input type="tel" className="form-control" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="birthDate" className="form-label">Date de naissance</label>
          <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={handleBirthDateChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Âge</label>
          <input type="number" className="form-control" id="age" value={age} disabled />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default AddUsers;
