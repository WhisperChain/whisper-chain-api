/**
 * Class for response entity key constants.
 *
 * @class ResponseEntityKeyConstants
 */
class ResponseEntityKeyConstants {
  /**
   * Get response key for entity type user ids.
   *
   * @returns {string}
   */
  get userIds() {
    return 'user_ids';
  }

  /**
   * Get response key for entity type users map.
   *
   * @returns {string}
   */
  get users() {
    return 'users';
  }

  /**
   * Get response key for meta entities.
   *
   * @returns {string}
   */
  get meta() {
    return 'meta';
  }

  /**
   * Get response key for entity type s3.
   *
   * @returns {string}
   */
  get s3() {
    return 's3';
  }

  /**
   * Get response key for entity type ipfs metadata.
   *
   * @returns {string}
   */
  get ipfsMetadata() {
    return 'ipfs_metadata';
  }
}

module.exports = new ResponseEntityKeyConstants();