import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  Heading,
  Image,
  Code,
  CodePane,
  BlockQuote,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem
} from "spectacle";

const WrappedListItem = (props) => (
  <ListItem style={{ color: "#FFF" }} {...props} />
);

const WrappedLink = (props) => (
  <Link target="_blank" style={{ color: "#00edff" }} {...props} />
);

const _Heading = (size) => {
  const component = ({ children }) => <Heading size={size}>{children}</Heading>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _S = (type) => {
  const component = ({ children }) => <S type={type}>{children}</S>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _CombineBlockQuote = ({ children }) => (
  <BlockQuote>
    <Quote>{children}</Quote>
  </BlockQuote>
);

_CombineBlockQuote.propTypes = { children: PropTypes.node };

const _CodePane = ({ children }) => (
  <CodePane theme="external" lang="javascript" source={children} />
);

_CodePane.propTypes = { code: PropTypes.string,
  language: PropTypes.string };

const Paragraph = styled.p `
  font-family: "MartelSans-SemiBold", serif;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  -webkit-font-smoothing: antialiased;
`;

export default {
  a: WrappedLink,
  blockquote: _CombineBlockQuote,
  code: _CodePane,
  del: _S("strikethrough"),
  em: _S("italic"),
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  img: Image,
  codespan: Code,
  li: WrappedListItem,
  p: Paragraph,
  strong: _S("bold"),
  ul: List,
  table: Table,
  thead: TableHeader,
  th: TableHeaderItem,
  tbody: TableBody,
  tr: TableRow,
  td: TableItem
};
