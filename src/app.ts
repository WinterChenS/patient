export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' };
}

export const layout = () => {
  return {
    logo: 'http://121.41.196.178:9000/picture/e1953730-967b-4ef5-bc96-cfb991e5c2cereact.png',
    menu: {
      locale: false,
    },
  };
};
