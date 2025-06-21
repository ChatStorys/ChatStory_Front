import useApi from '../useApi';

const useArchive = () => {
  const { archiveApi } = useApi();

  const getarchive = () => {
    return archiveApi
      .get('')
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  const Deletearchive = (book_id: string) => {
    return archiveApi
      .delete(`/${book_id}`)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    getarchive,
    Deletearchive,
  };
};

export default useArchive;
