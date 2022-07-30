import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

/**
 * メニュー一覧取得API
 * @param {number} category_id - カテゴリーID
 */
// export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   res.status(200).json({ name: 'John Doe' })
// }

/**
 * メニュー一覧取得API
 * @param {Object} params
 */

 export const get = async (params) => {
  let res
  try {
    res = await axios.get(`https://beauty.tsuku2.jp/api/menus`, {
      params
    })
    return res.data
  } catch (error) {
    console.log('getMenus axios error', error)
    return
  }
}