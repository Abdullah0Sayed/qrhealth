import { useCallback, useEffect, useState } from "react";
import { qrService } from "../../services/qrServices/qrService";

export default function useServices() {
  /** Services */
  const [services, setServices] = useState(null);

  /** Loading & Error */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /** Callback */
  const fetchServices = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await qrService.getQrServices();
      console.log(data?.data);
      setServices(data?.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  /** Execute */
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    loading,
    error,
    services,
  };
}
