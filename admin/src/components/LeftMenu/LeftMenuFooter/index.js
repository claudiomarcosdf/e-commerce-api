/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {

  return (
    <Wrapper>
      <div className="poweredBy">
        PoweredBy —&nbsp;
        <A href="http://zoom-bikes.com.br" target="_blank" rel="noopener noreferrer">
          Zoom Bikes
        </A>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
