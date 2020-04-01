import { useEffect, useState, useCallback } from 'react';
import { getAllSoldiers, getSoldier } from 'services/soldier';
import { getAllRanks, getRank } from 'services/rank';
import { getAllUnits, getUnit } from 'services/unit';
import { Soldier } from 'types/soldier';
import { Rank } from 'types/rank';
import { Unit } from 'types/unit';

const useSoldiers = (unitId?: number): [Array<Soldier>, Function] => {
  const [soldiers, setSoldiers] = useState<Soldier[]>([]);

  const fetchSoldiers = useCallback(async () => {
    try {
      const data = await getAllSoldiers(unitId);

      setSoldiers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchSoldiers();
  }, [fetchSoldiers]);

  return [soldiers, fetchSoldiers];
};

const useSoldier = (soliderId: string): [Soldier | undefined, Function] => {
  const [soldier, setSoldier] = useState<Soldier>();

  const fetchSoldier = useCallback(async () => {
    try {
      const soldierData = await getSoldier(soliderId);
      const soldierRank = await getRank(`${soldierData.rankId}`);
      soldierData.rank = soldierRank.name;

      setSoldier(soldierData);
    } catch (error) {
      console.log(error);
    }
  }, [soliderId]);

  useEffect(() => {
    fetchSoldier();
  }, [fetchSoldier]);

  return [soldier, fetchSoldier];
};

const useRanks = (): [Array<Rank>, Function] => {
  const [ranks, setRanks] = useState<Rank[]>([]);

  const fetchRanks = useCallback(async () => {
    try {
      const data = await getAllRanks();

      setRanks(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchRanks();
  }, [fetchRanks]);

  return [ranks, setRanks];
};

const useUnits = (): [Array<Unit>, Function] => {
  const [units, setUnits] = useState<Unit[]>([]);

  const fetchUnits = useCallback(async () => {
    try {
      const data = await getAllUnits();

      setUnits(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);

  return [units, setUnits];
};

export { useSoldiers, useSoldier, useRanks, useUnits };
