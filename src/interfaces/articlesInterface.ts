export interface IArticle {
  id: string;
  url: string;
  title: ITitle;
  thumbnail: string;
  dates: IDates;
  description: IDescription;
  cparent: ICparent;
  parents: IParent[];
}

interface ITitle {
  short: string;
}

interface IDates {
  posted: string;
  postedTs: number;
  postedSeparator: string;
}

interface IDescription {
  intro: string;
}

interface ICparent {
  id: string;
  url: IUrl;
}

interface IUrl {
  ru: string;
}

interface IParent {
  id: string;
  type: string;
  attachment: string;
}
