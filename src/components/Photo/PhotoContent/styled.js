import styled from 'styled-components';
import media from 'styled-media-query';
import ViewBlack from '../../../assets/visualizacao-black.svg';
import { scaleUp } from '../../../styles/settings/animations';
import { PhotoCommentsList } from '../PhotoComments/styled';

export const PhotoContentDetails = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const PhotoContentDiv = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;

  &.singlePhoto {
    grid-template-columns: 1fr;
    height: auto;

    img {
      grid-row: 1;
      border-radius: 0.4rem;
      overflow: hidden;
    }

    ${PhotoContentDetails} {
      padding: 1rem 0px 0px 0px;
    }

    ${PhotoCommentsList} {
      padding: 0px;
    }
  }

  animation-duration: 0.3s;
  animation-name: ${scaleUp};
  animation-fill-mode: forwards;

  ${media.lessThan('large')`
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  `}
`;

export const PhotoContentImg = styled.div`
  grid-row: 1/4;

  ${media.lessThan('large')`
    grid-row: 1;
  `}
`;

export const DetailsAuthor = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    :hover {
      text-decoration: underline;
    }
  }
`;

export const DetailsView = styled.span`
  ::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${ViewBlack});
  }
`;

export const DetailsAttributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    ::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: var(--default-color);
      margin-top: 5px;
    }
  }
`;
