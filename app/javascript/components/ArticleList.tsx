import React from 'react'
import { ArticleView } from './Article';
import styled from 'styled-components';
import { Article } from '../services/olio-api';

type ArticleListProps = {
  articles: Article[];
  onLike: (id: string, likes: number) => void;
};

export function ArticleList(props: ArticleListProps): JSX.Element {
  return <ArticlesContainer>
    { props.articles.map((article, index) => (
      <StyledArticle
        key={ article.id }
        isFirst={ index === 0 }
        article={ article }
        onLike={ () => props.onLike(article.id, article.reactions.likes + 1) }
      />
    ))}
  </ArticlesContainer>;
}

const ArticlesContainer = styled.section`
  padding: 56px;
`;

const StyledArticle = styled(ArticleView)<{ isFirst: boolean }>`
  margin-top: ${ (props: { isFirst: boolean }) => props.isFirst ? '0' : '56px' }
`;