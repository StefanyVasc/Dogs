import React, { useEffect } from 'react';
import Error from '../../../components/Error';
import Head from '../../../components/Head';
import Loading from '../../../components/Loading';
import useFetch from '../../../hooks/useFetch';
import { STATS_GET } from '../../../services/api';

const UserStatsGraphs = React.lazy(() =>
  import('./UserStatsGraphs/UserStatsGraphs'),
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head
          title="Estatísticas"
          description="Estatísticas das suas postagens"
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
