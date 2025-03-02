import publicApiAdapter from '@/adapters/publicApi.adapter';
import Cookies from 'js-cookie';

export const getAdataUser = async () => {
  const token: string | undefined = Cookies.get('token');
  const refresh: string | undefined = Cookies.get('refresh');
  try {
    const response = await publicApiAdapter.get(
      `${process.env.NEXT_PUBLIC_API_URL}/getDataUser`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          refresh: refresh,
        },
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
