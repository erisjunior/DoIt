/**
 * @function formatParams
 * -> format the passed parameters in the requisition that axios could read
 *
 * @param {Object} parameters
 */

export default function(parameters) {
  if (!parameters) {
    return {};
  }

  const {
    where,
    filters,
    temporaryToken,
    progressCallback,
    token,
  } = parameters;
  let { params, headers } = parameters;

  const auth = { Authorization: token };

  headers = { ...headers, ...auth };
  params = {
    ...params,

    filter: {
      ...filters,

      where,
      access_token: temporaryToken,
    },
  };

  return { headers, params, onUploadProgress: progressCallback };
}
