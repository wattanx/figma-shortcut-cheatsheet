export const config = {
  siteMeta: {
    title: '',
    description: '',
  },
  siteRoot:
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASEURL
      : 'http://localhost:3000',
};
