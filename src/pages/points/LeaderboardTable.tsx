import CardItem from '../../components/common/CardItem';

type ILeaderboardTableTitle = {
  id: string;
  title: string;
};

const leaderboardTableTitles: ILeaderboardTableTitle[] = [
  { title: 'Rank', id: 'rank' },
  { title: 'Wallet Address', id: 'wallet_address' },
  { title: 'Total Portfolio Size', id: 'total_portfolio_size' },
  { title: 'Points', id: 'points' },
  { title: 'Volume', id: 'volume' },
];

const TableTitle = ({
  title,
  titleStyles,
}: {
  title: string;
  titleStyles: string;
}) => (
  <div className='flex gap-1 justify-center items-center mb-2'>
    <span className={titleStyles}>{title}</span>
  </div>
);

const LeaderboardTable = ({ leaderboard }: { leaderboard: any[] }) => {
  return (
    <CardItem className=' h-auto  mb-4 lg:mb-0 w-full rounded-lg'>
      <div className=''>
        <div className='text-center h-[100%]'>
          <div className='py-3 px-2 grid grid-cols-5 border-y-[1px] bg-grey border-[#212325]'>
            {leaderboardTableTitles.map((item) => (
              <TableTitle
                title={item.title}
                key={item.id}
                titleStyles='text-xs font-medium text-[#FFFFFF] font-lufga'
              />
            ))}
          </div>

          <div className='h-[100%]'>
            {(leaderboard || []).map((item, index) => (
              <div
                className={`w-full grid grid-cols-5 py-[14px] px-2 justify-start border-b-[1px] border-[#212325] items-center ${
                  item.is_you ? 'bg-primary' : 'hover:bg-primary-hover'
                }`}
                key={index}
              >
                <div className='text-white font-lufga flex gap-1 justify-center items-center'>
                  <p className='text-xs sm:text-base lg:text-xs xl:text-xs'>
                    {item.rank}
                  </p>
                </div>
                <span className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.wallet_address}
                </span>
                <span className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.total_portfolio_size}
                </span>
                <span className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.points}
                </span>
                <span className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-xs'>
                  {item.volume}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardItem>
  );
};


export default LeaderboardTable;
