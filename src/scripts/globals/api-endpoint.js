import CONFIG from '../globals/config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`
}

export default API_ENDPOINT;