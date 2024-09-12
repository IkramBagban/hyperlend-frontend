import dashboardIcon from '../assets/icons/dashboard-icon.svg';
import lendborrowIcon from '../assets/icons/lend-borrow-icon.svg';

type NavLinkProps = {
    id: string;
    title: string;
    url: string;
    icon?: string;
    disabled: boolean;
}

const navLinks: NavLinkProps[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    url: '/dashboard',
    icon: dashboardIcon,
    disabled: false,
  },
  {
    id: 'markets',
    title: 'Markets',
    url: '/markets',
    icon: lendborrowIcon,
    disabled: false,
  },
  {
    id: 'points',
    title: 'Points',
    url: '/points',
    disabled: true,
  },
  {
    id: 'staking',
    title: 'Staking',
    url: '/staking',
    disabled: true,
  },
];


const assetsInfos = [
  {
    title: "Total Supplied",
    tooltip: "Total hyperlend deposits for each asset."
  },
  {
    title: "Supply APY",
    tooltip: "A percentage you will earn on deposits over a year."
  },
  {
    title: "Total Borrowed",
    tooltip: "Total hyperlend borrows for each asset."
  },
  {
    title: "Borrow APY",
    tooltip: "A percentage you will pay on borrows over a year."
  },
  {
    title: "Available Liquidity",
    tooltip: "The amount of tokens available to borrow for each asset."
  },
  {
    title: "Collateral",
    tooltip: "Signals if you can borrow using this asset as a collateral."
  },
  {
    title: "LTV",
    tooltip: "The amount you can borrow against your collateral. e.g. 80% LTV means you can borrow up to 80% of the collateral value."
  },
]
export { navLinks, assetsInfos };


