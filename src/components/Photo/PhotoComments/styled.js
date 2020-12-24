import styled from 'styled-components';

export const PhotoCommentsList = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
`;

export const PhotoCommentsItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;

  b {
    font-weight: bold;
  }
`;
