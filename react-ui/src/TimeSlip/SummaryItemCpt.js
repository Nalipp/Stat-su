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
  font-size: 7px;
  background: ${light};
  width: 13%;
`;

const Icon = Timer.extend`
  cursor: pointer;
  width: 6%;
  font-size: 8px;
`;

const Language = Timer.extend`
  width: 20%;
  font-size: 8px;
`;

const Description = Timer.extend`
  width: 52%;
  font-size: 8px;
`;

const concat = (str, chars) => {
  if (str.length > chars) str = str.slice(0, chars) + '...';
  return str;
}

function ItemSummary(props) {
  return (
    <Item {...props}>
      <Icon>
        <Icons 
          color={props.completed ? 'slightFade' : 'dark'} 
          size="small"
          onClick={props.onArchive}
          icon={props.completed ? 'unarchive' : 'archive'} />
      </Icon>
      <Timer>{formatTime.hhmmss(props.total_time)}</Timer>
      <Icon> {props.url &&
        <a href={props.url} target="_blank">
          <Icons 
            color={props.completed ? 'faded' : 'dark'} 
            size="small" icon="link" />
        </a>}
      </Icon>
      <Language>{concat(props.language, 15)}</Language>
      <Description>{concat(props.description, 38)}</Description>
      {props.completed && 
        <Icon>
          <Icons 
            color="slightFade" 
            onClick={props.onDelete}
            size="small" icon="trash" />
        </Icon>
      }
    </Item>
  )
}

ItemSummary.propTypes = {
  completed: PropTypes.bool,
  totalTime: PropTypes.number,
  description: PropTypes.string,
  total_time: PropTypes.number,
  url: PropTypes.string,
  language: PropTypes.string,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
}

export default ItemSummary;
