// function App() {
//     return <h1>Hola Mundo</h1>;
// };

// export default App;
// import {Fragment} from 'react';

import PropTypes from 'prop-types';

const newMessage = "Subtitulo"
export const FirstApp = ({title}) => {
  // if (!title) {
  //   throw new Error('El title no existe');
  // }
  // console.log(props);

  return (
    <>
        <h1>{title}</h1>
        <h2>{newMessage}</h2>
    </>
  )
}


// Prop y default prop al final
FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle : 'No hay subtitulo',
  name: "Luciano"
}