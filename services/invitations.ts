
import axios from 'axios';
import { PaginatedResponse, Invitation } from '../types/types';

export const FetchInvitations = async (page: number, sort: string): Promise<PaginatedResponse<Invitation>> => {
  const response = await axios.get<PaginatedResponse<Invitation>>(`/api/invitations`, {
    params: { page, sort }
  });
  return response.data;
};