import {
  ethIcon,
  mbtcIcon,
  purrIcon,
  stHypeIcon,
  usdcIcon,
} from '../../assets';
import {
  BorrowTransaction,
  SupplyTransaction,
  BorrowTransactionMobile,
  SupplyTransactionMobile,
} from '../interfaces/transactions';

export const supplyTransactions: SupplyTransaction[] = [
  {
    id: 1,
    asset: 'PURR',
    assetIcon: purrIcon,
    balance: 138.9,
    value: 22.21,
    apr: 14.56,
    isCollateralEnabled: true,
    status: 'Supply',
  },
  {
    id: 2,
    asset: 'USDC',
    assetIcon: usdcIcon,
    balance: 783.12,
    value: 783.12,
    apr: 3.77,
    isCollateralEnabled: true,
    status: 'Supply',
  },
  {
    id: 3,
    asset: 'MBTC',
    assetIcon: mbtcIcon,
    balance: 12.8,
    value: 772.82,
    apr: 4.11,
    isCollateralEnabled: true,
    status: 'Supply',
  },
  {
    id: 1,
    asset: 'stHYPE',
    assetIcon: stHypeIcon,
    balance: 12.41,
    value: 174.92,
    apr: 2.51,
    isCollateralEnabled: true,
    status: 'Supply',
  },
];
export const supplyTransactionsMobile: SupplyTransactionMobile[] = [
  {
    id: 1,
    asset: 'PURR',
    assetIcon: purrIcon,
    value: 22.21,
    apr: 14.56,
  },
  {
    id: 2,
    asset: 'USDC',
    assetIcon: usdcIcon,
    value: 783.12,
    apr: 3.77,
  },
  {
    id: 3,
    asset: 'MBTC',
    assetIcon: mbtcIcon,
    value: 772.82,
    apr: 4.11,
  },
  {
    id: 1,
    asset: 'stHYPE',
    assetIcon: stHypeIcon,
    value: 174.92,
    apr: 2.51,
  },
];
export const borrowTransactions: BorrowTransaction[] = [
  {
    id: 2,
    asset: 'USDC',
    assetIcon: usdcIcon,
    balance: 50.5,
    value: 50.5,
    apr: 6.12,
    pool: 'Core',
    status: 'Repay',
  },
  {
    id: 1,
    asset: 'PURR',
    assetIcon: purrIcon,
    balance: 36.1,
    value: 5.77,
    apr: 17.74,
    pool: 'Core',
    status: 'Repay',
  },
  {
    id: 1,
    asset: 'ETH',
    assetIcon: ethIcon,
    balance: 18.8,
    value: 47.3,
    apr: 11.59,
    pool: 'Core',
    status: 'Repay',
  },
  {
    id: 3,
    asset: 'MBTC',
    assetIcon: mbtcIcon,
    balance: 0.73,
    value: 44.8,
    apr: 6.38,
    pool: 'Core',
    status: 'Repay',
  },
];
export const borrowTransactionsMobile: BorrowTransactionMobile[] = [
  {
    id: 2,
    asset: 'USDC',
    assetIcon: usdcIcon,
    value: 50.5,
    apr: 6.12,
  },
  {
    id: 1,
    asset: 'PURR',
    assetIcon: purrIcon,
    value: 5.77,
    apr: 17.74,
  },
  {
    id: 1,
    asset: 'ETH',
    assetIcon: ethIcon,
    value: 47.3,
    apr: 11.59,
  },
  {
    id: 3,
    asset: 'MBTC',
    assetIcon: mbtcIcon,
    value: 44.8,
    apr: 6.38,
  },
];
