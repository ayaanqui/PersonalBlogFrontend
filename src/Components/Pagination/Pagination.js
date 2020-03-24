import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

let pageButtons = [];

const renderPageButtons = (maxPages, currentPage, pageSize, fetchPosts) => {
  pageButtons = [];
  for (let i = 1; i <= maxPages; i++) {
    pageButtons.push((
      <Pagination.Item
        onClick={() => fetchPosts(pageSize, i)}
        active={currentPage === i}
      >
        {i}
      </Pagination.Item >
    ));
  }
};

const pagination = props => {
  return (
    <Pagination size="sm">
      <Pagination.First
        onClick={() => props.fetchPosts(props.pageSize, 1)}
      />
      <Pagination.Prev
        onClick={() => props.fetchPosts(props.pageSize, props.currentPage - 1)}
        disabled={props.currentPage === 1}
      />

      { renderPageButtons(props.maxPages, props.currentPage, props.pageSize, props.fetchPosts) }
      { pageButtons.map(button => button) }

      <Pagination.Next
        onClick={() => props.fetchPosts(props.pageSize, props.currentPage + 1)}
        disabled={props.currentPage === props.maxPages}
      />
      <Pagination.Last
        onClick={() => props.fetchPosts(props.pageSize, props.maxPages)}
      />
    </Pagination>
  );
};

export default pagination;