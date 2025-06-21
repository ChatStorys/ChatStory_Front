import useApi from '../useApi';
import { createStorybody, sendStorybody, finishStorybody, chapterStorybody } from '../../../interface/useStory/story';

const useStory = () => {
  const { storyApi } = useApi();
  const token = localStorage.getItem('access_token');
  storyApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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
      .post(`/chat/send`, sendStorybody)
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

  const finishStory = (book_id: string) => {
    return storyApi
      .post('/finish', null, {
        params: { book_id },
      })
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
  };

  const finishStoryChapter = (chapterStorybody: chapterStorybody) => {
    return storyApi
      .post(`/chapter/end`, chapterStorybody)
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
