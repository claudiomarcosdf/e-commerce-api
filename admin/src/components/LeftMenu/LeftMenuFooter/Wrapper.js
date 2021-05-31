import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${props => props.theme.main.colors.zoom.lightBlack};
  bottom: 0;

  .poweredBy {
    width: 100%;
    bottom: 0;
    height: 3rem;
    text-align: center;
    /* padding-left: 15px; */
    padding-right: 10px;
    line-height: 3rem;
    background-color: rgba(255, 255, 255, 0.02);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.main.colors.zoom.white};
  }
`;

const A = styled.a`
  color: ${props => props.theme.main.colors.zoom.gold};

  &:hover {
    color: #d4af45;
    text-decoration: underline;
  }
`;

export default Wrapper;
export { A };
