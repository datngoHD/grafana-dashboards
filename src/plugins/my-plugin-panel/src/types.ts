export interface SimpleOptions {
  showAvatar: boolean;
}

export type UserApiResponse = {
  data: User[];
  meta: {
    totalRowCount: number;
  };
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
