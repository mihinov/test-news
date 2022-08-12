export interface ResponseGetMiniNews {
  news: ResponseOneMiniNews[];
  totalCount: number;
}

export interface ResponseOneMiniNews {
  categoryType: string;
  description: string;
  fullUrl: string;
  id: number;
  publishedDate: Date;
  title: string;
  titleImageUrl: string;
  url: string;
}

export interface ResponseGetFullNews {
  id: number;
  title: string;
  description: string;
  text: string;
  publishedDate: Date;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}
