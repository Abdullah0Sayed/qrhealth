/**
 *
 */

import { addAttrValue } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { contactUsService } from "../../services/contactus/contactUsService";
const INITIAL_VALUES = {
  email: null,
  phone: null,
  whatsapp: null,
  linkedIn: null,
  instagram: null,
  instagram: null,
  instagram: null,
};
export default function useSetting() {
  const [information, setInformation] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchQrHealthInformation = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await contactUsService.getQrInformation();
      console.log(data?.data);
      setInformation({
        email: data?.data?.email,
        phone: data?.data?.phone,
        whatsapp: data?.data?.whatsapp,
        linkedIn: data?.data?.linkedin,
        instagram: data?.data?.instagram,
      });
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQrHealthInformation();
  }, [fetchQrHealthInformation]);

  return {
    information,
    loading,
    error,
  };
}
