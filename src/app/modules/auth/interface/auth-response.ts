export interface AuthResponse {

  status: number;

  message: string;

  data: {
    id: number,
    username: string,
    email: string,
    roles: string[],
  };

  timestamp: number;
}

