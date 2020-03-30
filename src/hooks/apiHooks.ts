import { useEffect, useState, useCallback } from 'react';
import { getAllSoldiers } from 'services/soldier';
import { Soldier } from 'types/soldier';

export const useSoldiers = (): any => {
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
