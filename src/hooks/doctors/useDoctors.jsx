import { useCallback, useEffect, useState } from "react";
import { doctorService } from "../../services/doctor/doctorService";
import { useSelector } from "react-redux";

export default function useDoctors() {
  const lang = useSelector((state) => state.webLanguage);

  /** Doctors */
  const [doctors, setDoctors] = useState([]);

  /** Loading & Error */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDoctors = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await doctorService.getQrHealthDoctors();
      console.log(data?.data);
      setDoctors(data?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return {
    doctors,
    loading,
    error,
    refetchDoctors: fetchDoctors,
  };
}
