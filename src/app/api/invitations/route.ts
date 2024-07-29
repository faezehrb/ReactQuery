import { NextResponse, NextRequest } from 'next/server';
import { Invitation, PaginatedResponse } from '../../../../types/types';

// Mock data
const mockInvitations: Invitation[] = [
  { id: '1', name: 'Invitation 1', date: '2024-07-20' },
  { id: '2', name: 'Invitation 2', date: '2023-09-21' },
  { id: '3', name: 'Invitation 3', date: '2024-01-2' },
  { id: '4', name: 'Invitation 4', date: '2021-07-23' },
  { id: '5', name: 'Invitation 5', date: '2024-02-24' },
  { id: '6', name: 'Invitation 6', date: '2017-11-2' },
  { id: '7', name: 'Invitation 7', date: '2019-03-23' },
  { id: '8', name: 'Invitation 8', date: '2022-03-24' },
  // Add more mock data as needed
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'date';
  const pageNumber = parseInt(page, 10);
  const pageSize = 3;

  // Sort invitations by date
  const sortedInvitations = [...mockInvitations].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  // Paginate invitations
  const startIndex = (pageNumber - 1) * pageSize;
  const paginatedInvitations = sortedInvitations.slice(startIndex, startIndex + pageSize);

  const response: PaginatedResponse<Invitation> = {
    items: paginatedInvitations,
    totalPages: Math.ceil(mockInvitations.length / pageSize),
  };

  return NextResponse.json(response);
}