export interface Article {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}
