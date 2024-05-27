export interface AuthResponse {
  body: {
    user: User;
    accessToken?: string;
    refreshToken?: string;
  };
}
export interface AuthResponseError {
  body: {
    error: string;
  };
}

export interface User {
  _id: string;
  name: string;
  username: string;
}

export interface AccessTokenResponse {
  statusCode: number;
  body: {
    accessToken: string;
  };
  error?: string;
}

export interface MenuItem {
  id: number;
  nombre: string;
  icono: string;
  url: string;
  children?: MenuItem[];
}
