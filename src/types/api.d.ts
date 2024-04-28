type User = {
  id: number;
  email?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
};

type Post = {
  id: number;
  slug: string;
  title: string;
  content?: string;
  created_at: string;
  updated_at?: string;
};
