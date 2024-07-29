'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FetchInvitations } from '../../services/invitations';
import Pagination from '../../components/pagination';
import Notification from '../../components/notification';
import { Invitation } from '../../types/types';
import Image from 'next/image';
import Arrow from '../../public/svg/arrow';

const Dashboard: React.FC = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('date');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['invitations', page, sort], 
    queryFn: () => FetchInvitations(page, sort)
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="flex h-screen w-screen">
      <aside className="customLight w-3/12 bg-white grid justify-items-center content-center">
        <Image
          src="/img/Logo.png"
          width={124}
          height={28}
          alt="Logo"
        />
        <h3 className=' flex text-lg mt-20 mb-8 font-bold'>    <Image
                className='mr-2'
                  src="/img/setting 1.png"
                  width={26}
                  height={26}
                  alt="Logo"/>Dashboard</h3>
        <nav>
          <ul>
            <li className="flex  p-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <Image
                className='mr-2'
                  src="/img/key-square.png"
                  width={20}
                  height={20}
                  alt="Logo"/>
              </div>
              <div className="flex justify-start ">
                <p className="text-[#9197B3] min-w-32 mr-5 text-left">Product</p><Arrow />
              </div>
            </li>
            <li className="flex p-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <Image
                className='mr-2'
                  src="/img/key-square.png"
                  width={20}
                  height={20}
                  alt="Logo"/>
              </div>
              <div className="flex justify-start ">
                <p className="text-[#9197B3] min-w-32 mr-5">Invitation</p><Arrow />
              </div>
            </li>
            <li className="flex p-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <Image
                  className='mr-2'
                  src="/img/key-square.png"
                  width={20}
                  height={20}
                  alt="Logo"/>
              </div>
              <div className="flex justify-start  ">
                <p className="text-[#9197B3] min-w-32 mr-5">Income</p><Arrow />
              </div>
            </li>

            <li className="flex p-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <Image
                  className='mr-2'
                  src="/img/key-square.png"
                  width={20}
                  height={20}
                  alt="Logo"/>
              </div>
              <div className="flex justify-start">
                <p className="text-[#9197B3] min-w-32 mr-5">Promote</p><Arrow />
              </div>
            </li>
            <li className="flex p-3 hover:bg-gray-100 rounded-md cursor-pointer">
              <div>
                <Image
                  className='mr-2'
                  src="/img/key-square.png"
                  width={20}
                  height={20}
                  alt="Logo"/>
              </div>
              <div className="flex justify-start">
                <p className="text-[#9197B3] min-w-32 mr-5">Help</p><Arrow />
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-9/12 bg-[#FAFBFF] flex flex-col">
        <div className='h-20  '>
          <div className='m-8 fixed right-20'>
            <Notification />
          </div>
        </div>
        <div className="flex-1 bg-white customLight rounded-2xl w-[59rem] mx-auto p-6">
          <div className="flex justify-end mb-4">
            <button
              className="bg-[#FAFBFF] p-2 rounded-sm"
              onClick={() => setSort('date')}
            >
              Sorted by Date
            </button>
          </div>
          <ul className="w-full">
            {data?.items.map((item: Invitation) => (
              <li
                key={item.id}
                className="customLight w-full border-[#D7D7D7] m-2 rounded-xl p-4 border-[1px]"
              >
                {item.name} - {item.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center my-4">
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            totalPages={data?.totalPages || 1}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


