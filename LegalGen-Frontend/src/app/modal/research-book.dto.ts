export class Researchbook {
    id!: number;
    name!: string;
    dateCreated!: string;
    lastModified!: string;
    userId!: string;
    legalInformation!: LegalInformation[]
  }

  class LegalInformation{
    id!: number;
    type!: string;
    title!: string;
    description!: string;
    document!: string;
    dateAdded!: string;
    researchBookId!: number;
  }
