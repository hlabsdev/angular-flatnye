export class Medias {
  id: number;
  public titre: string;
  
  public type: string;
  public fichier: string;
  public bienId: number;

  constructor(

    titre: string,
    type: string,
     fichier: string,
    bienId: number
  ) {
    this.titre = titre;
    this.type = type;
    this.fichier = fichier;
    this.bienId = bienId;
   
  }
}
