/* eslint-disable @typescript-eslint/no-explicit-any */

export type DefaultApiResponseType<T = any> = {
  status: number;
  message: string;
  messageUser: string | null;
  data?: T extends undefined ? never : T;
  meta?: {
    page?: number;
    size?: number;
    total?: number;
  };
};
