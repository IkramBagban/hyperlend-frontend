import {
  //useState,
  useEffect,
  useRef,
} from 'react';
import {
  // useSwitchChain,
  // useAccount,
  // useWriteContract,
  useBlockNumber,
} from 'wagmi';
import ReactGA from 'react-ga4';
import CardItem from '../common/CardItem';
import { formatNumber } from '../../utils/functions';
//import { ModalType } from '../../utils/types';
//import { contracts, abis, networkChainId } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { useConfirm } from '../../provider/ConfirmProvider';
import { motion } from 'framer-motion';
import CustomIcon from '../common/CustomIcon';
import { borrowArrowIcon, supplyIcon } from '../../assets';
import {
  borrowTransactionTableTitlesMobile,
  supplyTransactionTableTitlesMobile,
} from '../../utils/constants/constants';

import {
  borrowTransactionsMobile,
  supplyTransactionsMobile,
} from '../../utils/mocks/transactions';
import TransactionTableTitles from './TransactionTableTitles';

function TransactionsMobile() {
  ReactGA.send({ hitType: 'pageview', page: '/dashboard' });

  const { guided } = useConfirm();
  const navigate = useNavigate();
  // const { data: hash, writeContractAsync } = useWriteContract();
  //const { switchChain } = useSwitchChain();
  //const {  chainId, isConnected } = useAccount();
  const { error: blockNumberError } = useBlockNumber();

  //const [modalStatus, setModalStatus] = useState<boolean>(false);
  // const [modalToken, setModalToken] = useState<string>('');
  // const [modalType, setModalType] = useState<ModalType>('supply');
  // const closeModal = () => setModalStatus(false);

  if (blockNumberError) {
    console.log(blockNumberError.name);
    alert(
      `RPC node error: ${blockNumberError.message} \n\nPlease try again later!`,
    );
  }

  // useEffect(() => {
  //   if (isConnected && chainId != networkChainId) {
  //     switchChain({ chainId: networkChainId });
  //   }
  // }, [isConnected, chainId]);

  // const sendToggleCollateralTx = (asset: string, isEnabled: boolean) => {
  //   writeContractAsync({
  //     address: contracts.pool,
  //     abi: abis.pool,
  //     functionName: 'setUserUseReserveAsCollateral',
  //     args: [asset, !isEnabled],
  //   });
  //   console.log(hash);
  // };

  const divRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // const [divDimensions, setDivDimensions] = useState<
  //   { width: number; height: number }[]
  // >([
  //   { width: 0, height: 0 },
  //   { width: 0, height: 0 },
  //   { width: 0, height: 0 },
  //   { width: 0, height: 0 },
  // ]);

  // Update widths and heights
  const updateDimensions = () => {
    // const newDimensions = divRefs.map((ref) => ({
    //   width: ref.current?.offsetWidth || 0,
    //   height: ref.current?.offsetHeight || 0,
    // }));
    //setDivDimensions(newDimensions);
  };

  useEffect(() => {
    // Update the dimensions immediately when the component mounts
    updateDimensions();

    // Add resize event listener to update dimensions during window resizing
    window.addEventListener('resize', updateDimensions);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col'
      >
        <motion.div
          ref={divRefs[3]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`lg:flex lg:flex-col xl:flex-row gap-5 justify-between ${guided > 0 && guided !== 4 ? 'lg:blur-[8px]' : ''}`}
        >
          <CardItem className='py-4 lg:py-6 px-4 md:px-4 xl:px-7 flex-1 mb-4 lg:mb-0'>
            <div className=''>
              <div className='flex justify-start align-middle items-center gap-2 py-2'>
                <CustomIcon
                  mainDivStyles='rounded-full border border-1 border-[#CAEAE51A] bg-[#CAEAE50D] px-3 py-2'
                  iconImage={supplyIcon}
                  width='7px'
                  height='10px'
                />
                <p className='text-white font-lufga text-2xl'>You Supplied</p>
              </div>
              <div className='text-center'>
                <div className='py-3 px-2 grid grid-cols-3 border-y-[1px] bg-grey border-[#212325]'>
                  {supplyTransactionTableTitlesMobile?.map((item) => (
                    <TransactionTableTitles
                      title={item.title}
                      key={item.id}
                      titleStyles='text-xs font-medium text-[#FFFFFF] font-lufga'
                    />
                  ))}
                </div>
                <div className='overflow-auto max-h-[200px]'>
                  {(supplyTransactionsMobile || []).map((item: any) => (
                    <button
                      className='w-full grid grid-cols-3 py-[14px] px-2.5 border-b-[1px] border-[#212325] items-center hover:bg-primary-hover'
                      key={item.id}
                      onClick={() =>
                        navigate(`/markets/${item.underlyingAsset}`)
                      }
                    >
                      <div className='text-white font-lufga flex gap-1 justify-center items-center'>
                        <img
                          className='w-4 sm:w-6 lg:w-4 xl:w-6'
                          src={item.assetIcon}
                          alt=''
                        />
                        <p className='text-xs sm:text-base lg:text-xs xl:text-base'>
                          {item.asset}
                        </p>
                      </div>

                      <div className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-base'>
                        ${formatNumber(item.value, 2)}K
                      </div>
                      <div className='text-success font-lufga text-xs sm:text-base lg:text-xs xl:text-base'>
                        {formatNumber(item.apr, 2)}%
                      </div>
                    </button>
                    // </Link>
                  ))}
                </div>
              </div>
            </div>
          </CardItem>
          <CardItem className='py-4 lg:py-6 px-4 md:px-4 xl:px-7 flex-1 mb-4 lg:mb-0'>
            <div className=''>
              <div className='flex justify-start align-middle items-center gap-2 py-2'>
                <CustomIcon
                  mainDivStyles='rounded-full border border-1 border-[#CAEAE51A] bg-[#FF00040D] px-3 py-2'
                  iconImage={borrowArrowIcon}
                  width='5px'
                  height='10px'
                />
                <p className='text-white font-lufga text-2xl'>You Borrowed</p>
              </div>
              <div className='text-center'>
                <div className='py-3 px-2 grid grid-cols-3 border-y-[1px] bg-grey border-[#212325]'>
                  {borrowTransactionTableTitlesMobile?.map((item) => (
                    <TransactionTableTitles
                      title={item.title}
                      key={item.id}
                      titleStyles='text-xs font-medium text-[#FFFFFF] font-lufga'
                    />
                  ))}
                </div>
                <div className='overflow-auto max-h-[200px]'>
                  {(borrowTransactionsMobile || []).map(
                    (item: any, index: any) => (
                      <button
                        className='w-full grid grid-cols-3 py-[14px] px-2.5 border-b-[1px] border-[#212325] items-center hover:bg-primary-hover'
                        key={index}
                        onClick={() =>
                          navigate(`/markets/${item.underlyingAsset}`)
                        }
                      >
                        <div className='text-white font-lufga flex gap-2 justify-center'>
                          <img
                            className='w-4 sm:w-6 lg:w-4 xl:w-6'
                            src={item.assetIcon}
                            alt=''
                          />
                          <p className='text-xs sm:text-base lg:text-xs xl:text-base'>
                            {item.asset}
                          </p>
                        </div>

                        <div className='text-white font-lufga text-xs sm:text-base lg:text-xs xl:text-base'>
                          ${formatNumber(item.value, 2)}K
                        </div>
                        <div className='text-success font-lufga text-xs sm:text-base lg:text-xs xl:text-base'>
                          {formatNumber(item.apr, 2)}%
                        </div>
                      </button>
                      // </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </CardItem>
        </motion.div>
      </motion.div>
    </>
  );
}

export default TransactionsMobile;
