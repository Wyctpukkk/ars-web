import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GET_ARTICLES($postedDateTo: Int) {
    articles: contents(project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", lang: "ru", take: 30, posted_date_to: $postedDateTo) {
      id
      url
      title {
        short
      }
      thumbnail
      dates {
        posted: posted(format: "2 $$Jan$$. 15:04", lang: "ru", getDiff: true)
        postedTs: posted
        postedSeparator: posted(format: "2 $$January$$ 2006", lang: "ru")
      }
      description {
        intro
      }
      cparent {
        id
        url {
          ru
        }
      }
      parents {
        id
        type
        attachment
      }
    }
  }
`;
