interface ApiResponse<T> {
  data: T;
  message: string;
  errors: any;
  status: number;
}

interface PaginatedResponse<T> {
  message: string;
  data: T;
  pagination: {
    perPage: number;
    currentPage: number;
    totalPages: number;
    totalDocumentCount: number;
  };
}
