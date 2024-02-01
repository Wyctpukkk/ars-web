import styled from 'styled-components';
import { IArticle } from '../interfaces/articlesInterface';

export const ArticleItem = ({ url, title, thumbnail, dates, description, cparent, parents }: IArticle) => {
  return (
    <ItemWrapper>
      <PreviewImageWrapper>
        <a href={`https://point.md/ru/novosti/${cparent.url.ru}/${url}`}>
          <PreviewImage src={`https://i.simpalsmedia.com/point.md/news/370x194/${thumbnail}`} />
        </a>
      </PreviewImageWrapper>

      <TextBlock>
        <HeadlineLink href={`https://point.md/ru/novosti/${cparent.url.ru}/${url}`}>
          <Headline>{title.short}</Headline>
        </HeadlineLink>
        <Paragraph>{description.intro}</Paragraph>
        <Source>
          <SourceImage>
            {parents[1].attachment ? (
              <PreviewImage src={`https://i.simpalsmedia.com/point.md/logo/${parents[1].attachment}`} />
            ) : (
              <PreviewImage src='https://i.simpalsmedia.com/point.md/logo/fbc892eef598782b189374d661858707.svg' />
            )}
          </SourceImage>
          <Time>{dates.posted}</Time>
        </Source>
      </TextBlock>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.article`
  display: flex;
  text-align: left;
  margin-bottom: 24px;
`;

const Source = styled.div`
  margin: 0px;
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
`;

const TextBlock = styled.div`
  margin-left: 16px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  -moz-box-pack: justify;
`;

const Headline = styled.h3`
  text-decoration: none;
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  font-weight: 500;
  color: rgb(15, 23, 42);
  &:hover {
    color: rgb(255, 71, 0);
  }
  @media (max-width: 835px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }
`;

const Paragraph = styled.p`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 0px 10px;
  color: rgb(15, 23, 42);
  @media (max-width: 835px) {
    display: none;
  }
`;

const PreviewImageWrapper = styled.div`
  min-width: 252px;
  width: 252px;
  height: max-content;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 500px) {
    min-width: 144px;
    width: 144px;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HeadlineLink = styled.a`
  text-decoration: none;
`;

const SourceImage = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
`;

const Time = styled.time`
  font-size: 14px;
  line-height: 0;
  width: max-content;
  color: rgb(128, 128, 128);
`;
