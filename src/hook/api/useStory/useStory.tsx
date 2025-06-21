import useApi from '../useApi';
import { createStorybody, sendStorybody, finishStorybody } from '../../../interface/useStory/story';

const useStory = () => {
  const { storyApi } = useApi();

  const createStory = (createStorybody: createStorybody) => {
    return storyApi
      .post('/create', createStorybody)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  const sendStory = (sendStorybody: sendStorybody) => {
    return storyApi
      .post(`/send`, sendStorybody)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  const continueStory = (continueStorybody: sendStorybody) => {
    return storyApi
      .post('/continue', continueStorybody)
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
  };

  const finishStory = (finishStorybody: finishStorybody) => {
    return storyApi
      .post(`/finish`, finishStorybody)
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
  };

  const finishStoryChapter = (book_id: string) => {
    return storyApi
      .post(`/chapter/finish`, book_id)
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    sendStory,
    continueStory,
    createStory,
    finishStory,
    finishStoryChapter,
  };
};

export default useStory;
