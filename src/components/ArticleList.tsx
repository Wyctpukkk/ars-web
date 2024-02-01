/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { ArticleItem } from './ArticleItem';
import { GET_ARTICLES } from '../apollo/articleList';
import { IArticle } from '../interfaces/articlesInterface';

export const ArticleList = () => {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [time, setTime] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(false);
  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLES, {
    variables: { postedDateTo: 0 },
  });

  const scrollHandler = async (e: Event) => {
    const target = (e.target as Document) || document;
    if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 1200 && !fetching) {
      setFetching(true);
    }
  };

  const getNewArticles = async () => {
    try {
      const result = await fetchMore({
        variables: { postedDateTo: +time },
      });
      setArticleList((prev) => [...prev, ...result.data.articles]);
    } catch (error) {
      console.error('Ошибка при загрузке новых данных:', error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setArticleList(data.articles);
    }
  }, [data]);

  useEffect(() => {
    if (articleList) {
      const newPostedDateTo: number = articleList[articleList.length - 1]?.dates?.postedTs;
      setTime(newPostedDateTo);
      setFetching(false);
    }
  }, [articleList]);

  useEffect(() => {
    if (fetching) {
      getNewArticles();
    }
  }, [fetching]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <ListWrapper>
      {articleList.length > 0 &&
        articleList.map((article: IArticle, index: number) => {
          const previousArticle = index > 0 ? articleList[index - 1] : null;
          const showDate = !previousArticle || article.dates.postedSeparator !== previousArticle.dates.postedSeparator;

          return (
            <div key={article.id}>
              {showDate && <CurrentDate>{article.dates.postedSeparator}</CurrentDate>}
              <ArticleItem key={article.id} {...article} />
            </div>
          );
        })}
    </ListWrapper>
  );
};

const ListWrapper = styled.section`
  width: full;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  background: #ffffff;
  border-radius: 8px;
  @media (max-width: 1240px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (max-width: 850px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const CurrentDate = styled.div`
  padding-bottom: 24px;
  color: rgb(15, 23, 42);
  position: relative;
  font-weight: 700;
  text-align: left;
  font-size: 28px;
  text-transform: lowercase;
  @media (max-width: 850px) {
    font-size: 24px;
  }
`;
