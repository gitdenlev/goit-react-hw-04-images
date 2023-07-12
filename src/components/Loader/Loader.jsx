import {FallingLines } from 'react-loader-spinner';

const Loader = () => (
  <FallingLines
    color="orange"
    width="150"
    visible={true}
    ariaLabel='falling-lines-loading'
    alignItems="center"
     wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
  />
);

export default Loader;
