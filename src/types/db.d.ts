type User = {
  id: number;
  name: string | null;
  email: string;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type PostFillable = {
  title: string;
  description?: string | null;
  content: string | ReactNode;
};

type Post = PostFillable & {
  id?: number;
  userId?: number;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
