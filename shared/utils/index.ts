import type { ApiResponse } from '../types';

export function createApiResponse<T = any>(
  success: boolean,
  data?: T,
  error?: string,
  message?: string
): ApiResponse<T> {
  return {
    success,
    ...(data && { data }),
    ...(error && { error }),
    ...(message && { message }),
  };
}
