import React, { createContext, useContext, useState } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import portfolio from './portfolio.json';

const SliderContext = createContext([0, () => {}]);

const SliderContextProvider = props => {
  const [sliderValue, setSliderValue] = useState(3);
  return (
    <SliderContext.Provider value={[sliderValue, setSliderValue]}>
      {props.children}
    </SliderContext.Provider>
  );
};

const style = css`
  color: hotpink;
`;

const App = () => {
  return (
    <SliderContextProvider>
      <Slider />
      <VisibleArea />
    </SliderContextProvider>
  );
};

const Slider = () => {
  const [sliderValue, setSliderValue] = useContext(SliderContext);
  return (
    <div>
      <input
        type="range"
        min="0"
        max="6"
        value={sliderValue}
        onChange={e => setSliderValue(parseInt(e.currentTarget.value, 10))}
      />
    </div>
  );
};

const Thumbnail = props => {
  const [sliderValue] = useContext(SliderContext);

  const [min, max] = props.range;
  if (sliderValue < min || sliderValue > max) {
    return null;
  }

  return <div>{props.children}</div>;
};

const THUMBNAILS = [
  <Thumbnail range={[0, 2]}>illustration</Thumbnail>,
  <Thumbnail range={[2, 5]}>lil of both</Thumbnail>,
  <Thumbnail range={[3, 3]}>home</Thumbnail>,
  <Thumbnail range={[5, 6]}>science</Thumbnail>,
];

const VisibleArea = () => {
  return <div>{THUMBNAILS}</div>;
};

export default App;
