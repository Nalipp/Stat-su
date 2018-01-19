import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from '../Icons';
import formatTime from '../time-utils';
import {media} from '../style-utils';

const light = props => props.theme.light;
const dark = props => props.theme.dark;
const faded = props => props.theme.faded;
const baseColor = props => props.completed ? faded : dark;

const Item = styled.li`
  padding: .1rem;
  width: 90%;
  list-style: none;
  display: flex;
  align-items: center; 
  margin: .2rem auto 0 auto;
  border-radius: .2rem;
  color: ${baseColor};
  border: .1rem solid ${baseColor};
`;

const Timer = styled.span`
  box-sizing: border-box;
  margin-left: .1rem;
  font-size: .55rem;
  background: ${light};
  width: 10%;
`;

const Icon = Timer.extend`
  cursor: pointer;
  width: 7%;
`;

const Language = Timer.extend`
  width: 22%;
`;

const Description = Timer.extend`
  width: 44%;
`;

const ItemSummary = props =>
  <Item {...props}>
    <Icon>
      <Icons color="dark" size="small" icon="trash" /></Icon>
    <Icon>
      <Icons 
        color="dark" size="small"
        icon={props.completed ? 'unarchive' : 'archive'} 
      />
    </Icon>
    <Timer>{formatTime(props.total_time)}</Timer>
    <Icon> {props.url &&
      <a href={props.url} target="_blank">
        <Icons 
          color={props.completed ? 'faded' : 'dark'} 
          size="small" icon="link" />
      </a>}
    </Icon>
    <Language>{props.language}</Language>
    <Description>{props.description.slice(0, 30) + '...'}</Description>
  </Item>

export default ItemSummary;
