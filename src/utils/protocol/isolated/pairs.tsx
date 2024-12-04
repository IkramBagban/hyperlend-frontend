import { useMemo, useCallback } from 'react';
import { useReadContracts, useReadContract } from 'wagmi';

import { contracts, abis, excludeIsolatedPairs } from '../../config';

export function useProtocolPairsData(): any {
  let {
    data: availablePoolsResults, //get all deployed pairs
  } = useReadContract({
    abi: abis.isolatedPairRegistry,
    address: contracts.isolatedPairRegistry,
    functionName: 'getAllPairAddresses',
  });

  if (!availablePoolsResults) {
    availablePoolsResults = [];
  }

  //for each pair, get borrowed asset, ltv, total supplied tokens, total borrow, total collateral
  const {
    data: pairResults,
    isLoading,
    isError,
  } = useReadContracts({
    contracts: (availablePoolsResults as `0x${string}`[]).flatMap(
      (poolAddress: `0x${string}`) => [
        {
          abi: abis.uiDataProviderIsolated,
          address: contracts.uiDataProviderIsolated,
          functionName: 'getPairData',
          args: [poolAddress],
        },
      ],
    ),
  });

  const getPairsData = useCallback(() => {
    if (!pairResults) {
      return (availablePoolsResults as `0x${string}`[]).reduce(
        (acc, asset) => {
          acc[asset] = {
            pair: '',
            asset: '',
            collateral: '',
            decimals: 0n,
            exchangeRate: {
              oracle: '',
              highExchangeRate: 0n,
              lastTimestamp: 0n,
              lowExchangeRate: 0n,
              maxOracleDeviation: 0n,
              chainlinkAssetAddress: '',
              chainlinkCollateralAddress: '',
            },
            interestRate: {
              lastBlock: 0,
              feeToProtocolRate: 0,
              lastTimestamp: 0n,
              ratePerSec: 0n,
            },
            ltv: 0n,
            name: '',
            symbol: '0',
            totalAsset: 0n,
            totalBorrow: 0n,
            totalCollateral: 0n,
            availableLiquidit: 0n,
          };
          return acc;
        },
        {} as Record<string, any>,
      );
    }

    return (availablePoolsResults as `0x${string}`[]).reduce(
      (acc, asset, index) => {
        const result = pairResults[index];
        if (result && result.status === 'success' && !excludeIsolatedPairs.includes((result.result as any).pair)) {
          acc[asset] = result.result as any;
        } else {
          console.error(`Failed to get pair data for asset or pair is excluded: ${asset}`);
        }
        return acc;
      },
      {} as Record<string, any>,
    );
  }, [pairResults, availablePoolsResults]);

  const pairsDataMap = useMemo(() => getPairsData(), [getPairsData]);

  return { pairsDataMap, isLoading, isError };
}
