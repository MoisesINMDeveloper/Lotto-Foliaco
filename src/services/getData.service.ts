import apiAdapter from '@/adapters/api.adapter';

export const getData = async () => {
  try {
    const response = await apiAdapter.get(
      `${process.env.NEXT_PUBLIC_API_URL}/getData`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
