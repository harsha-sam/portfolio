export type CareerType = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export type Article = {
  id: string;
  title: string;
  createdDate: string;
  description: string;
  public_url: string;
  cover_url?: string;
  preview_url?: string;
}