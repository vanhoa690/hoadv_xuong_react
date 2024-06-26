import { useLoading } from "src/contexts/loading";

const useApi = (callback: any) => {
  const { setLoading } = useLoading();
  setLoading(true);
  return callback()
    .catch((error: unknown) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

export default useApi;
