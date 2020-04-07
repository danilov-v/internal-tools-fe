// FIXME: should be replaced by redux slices
import { useEffect, useState, useCallback } from 'react';

import { UNIT_ID } from 'configs/constants';
import { fetchPersonnel, fetchPersonnelDetails } from 'services/http/personnel';
import { fetchRanks, fetchRankById } from 'services/http/rank';
import { fetchUnits } from 'services/http/unit';
import { Personnel, PersonnelDetails } from 'types/personnel';
import { Rank } from 'types/rank';
import { Unit } from 'types/unit';

const useSoldiers = (unitId?: number): [Array<Personnel>, Function] => {
  const [soldiers, setSoldiers] = useState<Personnel[]>([]);

  const fetchSoldiers = useCallback(async () => {
    try {
      const data = await fetchPersonnel({ unitId: unitId || UNIT_ID });

      setSoldiers(data);
    } catch (error) {
      console.log(error);
    }
  }, [unitId]);

  useEffect(() => {
    fetchSoldiers();
  }, [fetchSoldiers]);

  return [soldiers, fetchSoldiers];
};

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

const useRanks = (): [Array<Rank>, Function] => {
  const [ranks, setRanks] = useState<Rank[]>([]);

  const fetchAllRanks = useCallback(async () => {
    try {
      const data = await fetchRanks();

      setRanks(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAllRanks();
  }, [fetchAllRanks]);

  return [ranks, setRanks];
};

const useUnits = (): [Array<Unit>, Function] => {
  const [units, setUnits] = useState<Unit[]>([]);

  const fetchAllUnits = useCallback(async () => {
    try {
      const data = await fetchUnits();

      setUnits(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAllUnits();
  }, [fetchAllUnits]);

  return [units, setUnits];
};

export { useSoldiers, useSoldier, useRanks, useUnits };
