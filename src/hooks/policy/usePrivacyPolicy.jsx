import { useCallback, useEffect, useState } from "react";
import { privacyPolicyService } from "../../services/policy/privacyPolicyService";
import { useSelector } from "react-redux";

export default function usePrivacyPolicy() {
  const lang = useSelector((state) => state.webLanguage);
  /** Privacy Policy */
  const [privacyPolicy, setPrivacyPolicy] = useState([]);
  /** Terms Of Use */
  const [termsOfUse, setTermsOfUse] = useState([]);

  /** Loading & Error */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPolicies = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await privacyPolicyService.getAllPrivacyPolicy();
      console.log(data?.data?.privacy_policy);
      console.log(data?.data?.terms);
      setPrivacyPolicy(data?.data?.privacy_policy);
      setTermsOfUse(data?.data?.terms);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    fetchPolicies();
  }, [fetchPolicies]);

  return {
    privacyPolicy,
    termsOfUse,
    loading,
    error,
    refetchPolicies: fetchPolicies,
  };
}
