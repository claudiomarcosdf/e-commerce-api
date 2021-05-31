/**
 *
 * SocialLink
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Default from '../../assets/images/social_default.png';
import Instagram from '../../assets/images/social_instagram.png';
import Twitter from '../../assets/images/social_twitter.png';
import Facebook from '../../assets/images/social_facebook.png';
import YouTube from '../../assets/images/social_YouTube.png';

import { SocialLinkWrapper } from './components';

function getSrc(name) {
  switch (name) {
    case 'GitHub':
      return Gh;
    case 'Reddit':
      return Reddit;
    case 'Medium':
      return Medium;
    case 'Slack':
      return Slack;
    case 'Twitter':
      return Twitter;
    case 'Forum':
    case 'Academy':
      return Forum;
    case 'Facebook':
      return Facebook;
    case 'Instagram':
      return Instagram;
    case 'YouTube':
      return YouTube;
    default:
      return Default;
  }
}

const SocialLink = ({ link, name }) => {
  return (
    <SocialLinkWrapper className="col-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={getSrc(name)} alt={name} />
        <span>{name}</span>
      </a>
    </SocialLinkWrapper>
  );
};

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(SocialLink);
