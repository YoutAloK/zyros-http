import client from '../client.js';

export async function get(url, config = {}) {
  try {
    const response = await client.get(url, config);
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
