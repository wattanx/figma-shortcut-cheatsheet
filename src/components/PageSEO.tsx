import { useRouter } from 'next/router';
import NextHeadSeo from 'next-head-seo';
import { config } from '../site.config';

type Props = {
  path: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

export const PageSEO: React.FC<Props> = (props) => {
  const {
    title = config.siteMeta.title,
    description = config.siteMeta.description,
    noindex,
    noTitleTemplate,
  } = props;

  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASEURL
      : 'http://localhost:3000';
  const pageUrl = baseUrl + useRouter().pathname;
  const ogImageUrl = baseUrl + '/figma-cheat-sheet.png';

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - wattanx`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'figma cheat sheet',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  );
};
