import client from '../client.js';

export async function post(url,data={}, config = {}) {
  try {
    const response = await client.post(url, data, config);
    return {
      success: true,
      data: response.data,
      status: response.status
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error?.response?.status || 500,
      data: null
    };
  }
}
