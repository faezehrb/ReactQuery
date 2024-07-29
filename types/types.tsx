
export interface Invitation {
  id: string;
  name: string;
  date: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalPages: number;
}