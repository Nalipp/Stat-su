import React from 'react';
import PropTypes from 'prop-types';
import ItemSummaryCpt from './ItemSummaryCpt';
import styled from 'styled-components';
import Icons from '../Icons';

const Item = styled.li`
  list-style: none;
  display: flex;
  border: 1px solid ${props => props.theme.light};
`;

const ItemData = styled.span`
  width: 22%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.dark};
`;

const Skinny = ItemData.extend`
  width: 5%;
  padding: .1rem;
`;

const Wide = ItemData.extend`
  width: 33%;
`;

const ItemSummary = props =>
  <Item {...props}>
    <Skinny>
      <Icons size="small" icon="trash" />
    </Skinny>
    <ItemData>{props.total_time}</ItemData>
    <ItemData>{props.completed}</ItemData>

    <Skinny>
    {props.url ? 
        <a href={props.url} target="_blank">
          <Icons size="small" icon="link" />
        </a>
      :
        ''
    }
    </Skinny>

    <ItemData>{props.language}</ItemData>
    <Wide>{props.description.slice(0, 22)}</Wide>
  </Item>

export default ItemSummary;
