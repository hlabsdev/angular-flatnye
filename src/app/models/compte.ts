export class Compte {
  nom: string;
  adresse: string;
  email: string;
  contact: number;
  localisation: number;
  typecompte: string;

  constructor(nom: string, adresse: string, email: string, contact: number, localisation: number, typecompte: string){

  this.nom = nom;
  this.adresse = adresse;
  this.email = email;
  this.contact = contact;
  this.localisation = localisation;
  this.typecompte = typecompte;
  
  }
}
