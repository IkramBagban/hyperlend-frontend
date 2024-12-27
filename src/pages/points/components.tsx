import CardItem from '../../components/common/CardItem';
import bronzeBadge from '../../assets/icons/bronze-badge.svg';
import progressIcon from '../../assets/icons/progress-icon.svg';
import upArrow from '../../assets/icons/up-arrow.svg';

export const RankCard1 = () => {
  return (
    <CardItem className='flex flex-col items-center sm:flex-row justify-around px-4 sm:px-6 py-4 bg-dark rounded-lg border-[3px] border-[#3E3F42] gap-6'>
      <div className='flex flex-col items-center'>
        <img
          src={progressIcon}
          alt='Progress Icon'
          className='w-16 h-16 sm:w-20 sm:h-20'
        />
      </div>

      <div className='flex flex-col items-center sm:items-start gap-2 text-center sm:text-left'>
        <div className='text-secondary text-sm'>Tier</div>
        <div className='flex gap-2'>
          <div className='flex gap-2 items-center'>
            <img
              src={bronzeBadge}
              alt='Bronze Badge'
              className='w-6 h-6 sm:w-7 sm:h-7'
            />
          </div>
          <div className='text-[#D4B38A] text-lg sm:text-xl font-bold'>
            Bronze
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center sm:items-start gap-2 text-center sm:text-left'>
        <div className='text-secondary text-sm font-lufga'>Rank</div>
        <div className='flex items-center gap-1 text-base sm:text-lg font-lufga text-white'>
          1874{' '}
          <span className='text-green-500 text-xs flex items-center'>
            <img src={upArrow} alt='Progress Icon' className='w-6  h-6 ' />
            21
          </span>
        </div>
      </div>

      <div className='flex flex-col items-center sm:items-start gap-2 text-center sm:text-left'>
        <div className='text-secondary text-sm font-lufga'>Total Points</div>
        <div className='text-lg sm:text-xl font-bold text-white'>785</div>
      </div>
    </CardItem>
  );
};



export const DailyDrop = () => {
  return (
    <CardItem className='text-white flex items-center justify-around px-4 py-5 bg-dark rounded-lg border border-[#3E3F42]'>
      <div className=''>
        <div className='text-lg font-lufga '>Daily Drop</div>
        <div className='font-lufga text-xs w-[10rem]'>
          Unlock your daily points and rise through the ranks.
        </div>
      </div>
      <button
        className={`py-4 w-[25%] bg-secondary text-xs font-black rounded-md whitespace-nowrap transition-colors  text-black`}
        type='button'
      >
        Claim
      </button>
    </CardItem>
  );
};

export const RankCard = () => {
  return (
    <CardItem className=' mx-auto bg-transparent rounded-lg p-2 flex flex-col items-center text-center border border-1 border-[#D4B38A]  w-full h-full'>
      <div className='text-[#C1C1C1] text-sm font-semibold mb-4'>HyperLend</div>

      <div className='w-16 h-16 border border-[#D4B38A] p-3  rounded-full flex items-center justify-center mb-4'>
        {/* <div className='w-12 h-12 bg-[#D3A156] rounded-full flex items-center justify-center'>
          <div className='w-8 h-8 bg-[#F4E3C2] rounded-full'></div>
        </div> */}
        <div className='flex gap-2 items-center'>
          <img
            src={bronzeBadge}
            alt='Bronze Badge'
            className='w-[5rem] h-[5rem]'
          />
        </div>
      </div>

      <div>
        <div className='text-[#CAEAE5] text-4xl font-bold mb-2 font-lufga'>
          1874
        </div>
        <div className='text-[#B1B5C3] text-xs font-lufga'>Total Points</div>
      </div>
      <div className='text-[#C1C1C1] text-base font-medium mb-6 font-lufga text-small w-[12rem]'>
        Achieved rank <span className='text-[#C1C1C1] font-bold'>837</span> and
        chilling at <span className='text-[#D4B38A]'>Bronze</span> tier!
      </div>

      <button
        className={`bg-secondary border-2 hover:bg-[#CAEAE5]/20 w-full py-4 rounded-b-xl mt-4 font-lufga active:scale-95 duration-200`}
      >
        <p className={`capitalize text-lg font-extrabold`}>Download Image</p>
      </button>
    </CardItem>
  );
};
