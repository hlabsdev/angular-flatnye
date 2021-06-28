export class Biens {

  id: number;
  public titre: string;
  public localisation: number;
  public ville: string;
  public quartier: string;
  public dimensions: number;
  public description: string;
  public prix: number;
  public type: string;
  public categorie: string;
  public etat: string;
  public est_valide: boolean;
  public   agence: number

  constructor(

          titre: string,
          localisation: number,
          ville: string,
          quartier: string,
          dimensions: number,
          description: string,
          prix: number,
          type: string,
          categorie: string,
          etat: string,
          agence: number) {
    this.titre = titre;
    this.localisation = localisation;
    this.ville = ville;
    this.quartier = quartier;
    this.dimensions = dimensions;
    this.description = description;
    this.prix = prix;
    this.type = type;
    this.categorie = categorie;
    this.etat = etat;
    this.agence = agence;
  }

  
}

