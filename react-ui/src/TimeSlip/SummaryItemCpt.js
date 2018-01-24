import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from '../Icons';
import formatTime from '../time-utils';
import { media, truncate } from '../style-utils';

const light = props => props.theme.light;
const dark = props => props.theme.dark;
const faded = props => props.theme.faded;
const baseColor = props => props.completed ? faded : dark;

const Item = styled.li`
  padding: .1rem;
  list-style: none;
  margin-bottom: .15rem;
  display: flex;
  align-items: center; 
  border-radius: .2rem;
  color: ${baseColor};
  border: .1rem solid ${baseColor};

  ${media.tablet`
    padding: .2rem;
    margin-bottom: .3rem;
  `};
  ${media.desktop`
    padding: .3rem;
    margin-bottom: .4rem;
  `};
  ${media.jumboDesktop`
    padding: .4rem;
    margin-bottom: .5rem;
  `};
`;

const Timer = styled.span`
  box-sizing: border-box;
  padding: 0 .2rem;
  font-size: 7px;
  background: ${light};
  width: 13%;

  ${media.tablet`
    font-size: .75rem;
    padding: 0 .4rem;
  `};
  ${media.desktop`
    font-size: 1rem;
    padding: 0 .5rem;
  `};
  ${media.jumboDesktop`
    font-size: 1.25rem;
    padding: 0 .7rem;
  `};
`;

const IconWrapper = Timer.extend`
  cursor: pointer;
  width: 6%;
  font-size: 8px;

  &:hover {
    transform: translateY(1px);
  }
`;

const Language = Timer.extend`
  ${ truncate('20%') }
  font-size: 8px;
`;

const Description = Timer.extend`
  ${ truncate('52%') }
  font-size: 8px;
`;

function ItemSummary(props) {
  return (
    <Item {...props}>
      <IconWrapper>
        <Icons 
          color={props.completed ? 'slightFade' : 'dark'} 
          size="small"
          onClick={props.onArchive}
          icon={props.completed ? 'unarchive' : 'archive'} />
      </IconWrapper>
      <Timer>{formatTime.hhmmss(props.total_time)}</Timer>
      <IconWrapper> {props.url &&
        <a href={props.url} target="_blank">
          <Icons 
            color={props.completed ? 'faded' : 'dark'} 
            size="small" icon="link" />
        </a>}
      </IconWrapper>
      <Language>{props.language}</Language>
      <Description>{props.description}</Description>
      {props.completed && 
        <IconWrapper>
          <Icons 
            color="slightFade" 
            onClick={props.onDelete}
            size="small" icon="trash" />
        </IconWrapper>
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
