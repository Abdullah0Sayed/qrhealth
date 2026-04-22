import { useCallback, useEffect, useState } from "react";
import { specializationService } from "../../services/Specializations/specializationService";

export default function useSpecializations() {
  /** Entities */
  const [entities, setEntities] = useState(null);
  const [specializationLoading, setSpecializationLoading] = useState(false);
  const [specializationError, setSpecializationError] = useState(null);

  const fetchSpecializations = useCallback(async () => {
    setSpecializationLoading(true);
    try {
      const { data } = await specializationService.getAllSpecializations();
      console.log(data?.data);
      setEntities(data?.data);
    } catch (error) {
      setSpecializationError(error);
    } finally {
      setSpecializationLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSpecializations();
  }, [fetchSpecializations]);

  return {
    specializationLoading,
    specializationError,
    specializations: entities,
  };
}
