// FIXME: should be replaced by redux slices
import { useEffect, useState, useCallback } from 'react';

// services
import { fetchPersonnelDetails } from 'services/http/personnel';
import { fetchRankById } from 'services/http/rank';
import { PersonnelDetails } from 'types/personnel';

const useSoldier = (
  personnelId: number,
): [PersonnelDetails | undefined, Function] => {
  const [soldier, setSoldier] = useState<PersonnelDetails>();

  const fetchSoldier = useCallback(async () => {
    try {
      const soldierData = await fetchPersonnelDetails(personnelId);
      const soldierRank = await fetchRankById(soldierData.rankId);
      soldierData.rank = soldierRank.name;

      setSoldier(soldierData);
    } catch (error) {
      console.log(error);
    }
  }, [personnelId]);

  useEffect(() => {
    fetchSoldier();
  }, [fetchSoldier]);

  return [soldier, fetchSoldier];
};

export { useSoldier };
