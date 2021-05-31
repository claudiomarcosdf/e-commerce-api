import styled from 'styled-components';

import Logo from '../../../assets/images/zoom-gold.svg';

const Wrapper = styled.div`
  background-color: ${props => props.theme.main.colors.zoom.black};
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 11rem;
  }
`;

export default Wrapper;
