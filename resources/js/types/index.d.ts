export type PaginatedData<T = unknown> = {
  data: T[];
  links: Record<string, string>;
};

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};
