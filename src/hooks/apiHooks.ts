import { useEffect, useState, useCallback } from 'react';
import { getAllSoldiers, getSoldier } from 'services/soldier';
import { Soldier } from 'types/soldier';

const useSoldiers = (): [Array<Soldier>, Function] => {
  const [soldiers, setSoldiers] = useState<Soldier[]>([]);

  const fetchSoldiers = useCallback(async () => {
    try {
      const data = await getAllSoldiers();

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
      const data = await getSoldier(soliderId);

      setSoldier(data);
    } catch (error) {
      console.log(error);
    }
  }, [soliderId]);

  useEffect(() => {
    fetchSoldier();
  }, [fetchSoldier]);

  return [soldier, fetchSoldier];
};

export { useSoldiers, useSoldier };
