import request from '@/utils/request'

/**
 *
 * @param {string} username
 * @returns
 */
export function getUser(username) {
  return request(`/users/${username}`)
}
