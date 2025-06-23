import useApi from '../useApi';
const useArchive = () => {
  const { archiveApi } = useApi();
  const token = localStorage.getItem('access_token');
  archiveApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
  const getarchiveAbook = (book_id: string) => {
    return archiveApi
      .get(`/${book_id}`)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    getarchive,
    Deletearchive,
    getarchiveAbook,
  };
};

export default useArchive;
