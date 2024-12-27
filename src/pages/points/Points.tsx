import CardItem from '../../components/common/CardItem';
import { leaderboardData, points } from './data';
import { DailyDrop, RankCard, RankCard1 } from './components';
import LeaderboardTable from './LeaderboardTable';
import Navbar from '../../layouts/Navbar';

import magnifyIcon from '../../assets/icons/magnify-icon.svg';

type IPoinsTableTitle = {
  id: string;
  title: string;
};

// will add this in constants.ts
const pointTableTitles: IPoinsTableTitle[] = [
  { title: 'Week', id: 'week' },
  { title: 'Points', id: 'points' },
  { title: 'Referred Volume', id: 'reffered_volume' },
];

const PointTableTitles = ({ title, titleStyles }: any) => {
  return (
    <div className='flex gap-1 justify-center items-center mb-2 align-middle'>
      <span className={titleStyles}>{title}</span>
    </div>
  );
};

const PointsTable = () => {
  return (
    <CardItem className='h-auto mb-4 lg:mb-0'>
      <div className=''>
        <div className='text-center h-[100%]'>
          <div className='py-3 px-2 grid grid-cols-3 border-y-[1px] bg-grey border-[#212325]'>
            {pointTableTitles?.map((item) => (
              <PointTableTitles
                title={item.title}
                key={item.id}
                titleStyles='text-xs font-medium text-[#FFFFFF] font-lufga'
              />
            ))}
          </div>
          <div className='h-[100%]'>
            {(points || []).map((item: any) => (
              <div
                className='w-full grid grid-cols-3 py-[14px] px-2 justify-start border-b-[1px] border-[#212325] items-center hover:bg-primary-hover'
                key={item.id}
              >
                <div className='text-white font-lufga flex gap-1 justify-start items-center'>
                  <p className='text-xs sm:text-base lg:text-xs xl:text-xs'>
                    {item.week}
                  </p>
                </div>
                <span className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.points}
                </span>
                <div className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.referredVolume}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardItem>
  );
};

function Points() {
  return (
    <div className='space-y-4'>
      <Navbar pageTitle={<span className='hidden lg:inline'>Points</span>} />
      <div className='grid grid-cols-1 md:grid-cols-10 gap-4'>
        <div className='md:col-span-6'>
          <RankCard1 />
        </div>
        <div className='md:col-span-4'>
          <DailyDrop />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-10 gap-4'>
        <div className='md:col-span-6'>
          <PointsTable />
        </div>
        <div className='md:col-span-4'>
          <RankCard />
        </div>
      </div>

      <div className='mt-4 font-lufga space-y-2'>
        <div className='text-[#CAEAE566]'>Leaderboard</div>
        <div className='border  border-[#3E3F42] rounded-lg'>
          <div className='p-4 w-[30rem]'>
            <div
              className='bg-transparent border rounded-lg md:flex gap-2 '
              style={{ border: '1px solid #CAEAE51A' }}
            >
              <div className='flex ml-4'>
                <img src={magnifyIcon} alt='' />
              </div>
              <input
                className='w-full p-2 bg-transparent rounded-lg text-[#CAEAE566]  '
                placeholder='Search by wallet address'
              />
            </div>
          </div>

          <LeaderboardTable leaderboard={leaderboardData} />
        </div>
      </div>
    </div>
  );
}

export default Points;
