import axios from 'axios';

/**
 * メニュー一覧取得API
 * @param {Object} request
 */

export interface Params {
  category_id: number;
}

export const get = async (params: Params) => {
  try {
    let res = await axios.get(`https://beauty.tsuku2.jp/api/menus`, {
      params
    })
    return res.data;
  } catch (error) {
    console.log('getMenus axios error', error)
    return
  }
}