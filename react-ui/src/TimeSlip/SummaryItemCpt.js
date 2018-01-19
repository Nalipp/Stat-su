import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from '../Icons';
import formatTime from '../time-utils';

const light = props => props.theme.light;
const dark = props => props.theme.dark;
const faded = props => props.theme.faded;
const baseColor = props => props.completed ? faded : dark;

const Item = styled.li`
  list-style: none;
  display: flex;
  margin: .2rem 1rem 0 1rem;
  padding: .1rem;
  border-radius: .2rem;
  color: ${baseColor};
  border: .1rem solid ${baseColor};
`;

const Normal = styled.span`
  width: 22%;
  background: ${light};
`;

const Skinny = Normal.extend`
  width: 5%;
  padding: .1rem;
`;

const Wide = Normal.extend`
  width: 33%;
`;

const ItemSummary = props =>
  <Item {...props}>
    <Skinny>
      <Icons 
        color={props.completed ? 'faded' : 'dark'} 
        size="small" icon="trash" />
    </Skinny>
    <Normal>{formatTime(props.total_time)}</Normal>
    <Normal>{props.completed ? 'yes' : 'no'}</Normal>
    <Skinny> {props.url &&
      <a href={props.url} target="_blank">
        <Icons 
          color={props.completed ? 'faded' : 'dark'} 
          size="small" icon="link" />
      </a>}
    </Skinny>
    <Normal>{props.language}</Normal>
    <Wide>{props.description.slice(0, 22)}</Wide>
  </Item>

export default ItemSummary;
