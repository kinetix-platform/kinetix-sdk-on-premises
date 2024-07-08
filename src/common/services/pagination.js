import qs from 'qs';

const setPaginationHeader = (key, req, res, limit, offset) => {
  const [fullPath, queryString] = req.originalUrl.split('?')
  const url = qs.parse(queryString);
  url.offset = offset;
  res.setHeader(
    `x-pagination-${key}-page`,
    `${fullPath}?${qs.stringify(url, { encode: false })}`,
  );
};

export const setPaginationHeaders = (req, res, total, limit, offset = 0) => {
  const lastPage = Math.ceil(total / limit);
  const currentPageFactor = Math.ceil(offset / limit);
  const lastOffset = Math.max(0, lastPage - 1) * limit;
  const nextOffset = limit * (currentPageFactor + 1);
  const previousOffset = Math.max(0, currentPageFactor - 1) * limit;
  const hasNextPage = limit * (currentPageFactor + 1) <= lastOffset;
  const hasPreviousPage = currentPageFactor > 0;
  res.setHeader('x-pagination-length', total);
  setPaginationHeader('first', req, res, limit, 0);
  setPaginationHeader('last', req, res, limit, lastOffset);
  if (hasNextPage) {
    setPaginationHeader('next', req, res, limit, nextOffset);
  }
  if (hasPreviousPage) {
    setPaginationHeader('previous', req, res, limit, previousOffset);
  }
};
