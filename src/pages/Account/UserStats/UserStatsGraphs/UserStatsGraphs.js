import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';
import * as S from './styled';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, total),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <S.GraphSection>
      <S.GraphTotal as={S.GraphItem}>
        <p>Acessos: {total}</p>
      </S.GraphTotal>
      <S.GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: '#fff', strokeWidth: 2 },
            labels: { fontSize: 14, fill: '#333' },
          }}
        />
      </S.GraphItem>
      <S.GraphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </S.GraphItem>
    </S.GraphSection>
  );
};

export default UserStatsGraphs;
