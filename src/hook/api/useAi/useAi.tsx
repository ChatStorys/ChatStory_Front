import useApi from '../useApi';
import { saveAiBody, summaryAiBody } from '../../../interface/useAi/ai';

const useAi = () => {
  const { aiApi } = useApi();

  const saveAi = (savebody: saveAiBody) => {
    return aiApi
      .post('/save', savebody)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  const summaryAi = (summarybody: summaryAiBody) => {
    return aiApi
      .post(`/story/chapter/summary_with_music`, summarybody)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    saveAi,
    summaryAi,
  };
};

export default useAi;
