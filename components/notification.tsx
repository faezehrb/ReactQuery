
import { useState } from 'react';
import Image from 'next/image'
import Arrow from '../public/svg/arrow';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="notification ">
      <button className='fixed right-20' onClick={() => setShowNotification(!showNotification)}>
      <Image
              className=' bg-white rounded-sm customLight p-2 mr-20'
              src="/img/Bell Bing.png"
              width={40}
              height={40}
              alt="Logo"/>
      </button>
      {showNotification && (
        <div className="notification-box absolute top-4 ">
            <ul className='customLight w-[30px] bg-white border-r-3'>
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
            </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;