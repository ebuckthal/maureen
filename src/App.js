import React, { createContext, useContext, useState, useEffect } from 'react';

const SliderContext = createContext([0, () => {}]);

const SliderContextProvider = props => {
  const [sliderValue, setSliderValue] = useState(3);
  return (
    <SliderContext.Provider value={[sliderValue, setSliderValue]}>
      {props.children}
    </SliderContext.Provider>
  );
};

const App = () => {
  return (
    <div class="flex justify-center">
      <div class="m-3 max-w-md sm:w-auto md:w-md">
        <SliderContextProvider>
          <Slider />
          {THUMBNAILS}
        </SliderContextProvider>
      </div>
    </div>
  );
};

const SliderBackground = ({ index, visible }) => (
  <div
    style={{
      position: 'absolute',
      width: visible ? '100%' : '1px',
      height: visible ? '50px' : '1px',
      zIndex: -1,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url("/slider_scale_pos${index + 1}.png")`,
    }}
  />
);

const Slider = () => {
  const [sliderValue, setSliderValue] = useContext(SliderContext);
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <SliderBackground index={0} visible={sliderValue === 0} />
      <SliderBackground index={1} visible={sliderValue === 1} />
      <SliderBackground index={2} visible={sliderValue === 2} />
      <SliderBackground index={3} visible={sliderValue === 3} />
      <SliderBackground index={4} visible={sliderValue === 4} />
      <SliderBackground index={5} visible={sliderValue === 5} />
      <SliderBackground index={6} visible={sliderValue === 6} />
      <input
        style={{ height: '50px', padding: '0 10px' }}
        type="range"
        min="0"
        max="6"
        value={sliderValue}
        onChange={e => setSliderValue(parseInt(e.currentTarget.value, 10))}
      />
      <div class="flex justify-between ml-3 mr-3">
        <div>art</div>
        <div>science</div>
      </div>
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

const AboutTile = () => {
  return (
    <div class="max-w-md w-full lg:flex">
      <p class="text-grey-darker text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
  );
};

const THUMBNAILS = [
  <Thumbnail range={[0, 9]}>
    <AboutTile />
  </Thumbnail>,
  <Thumbnail range={[0, 2]}>illustration</Thumbnail>,
  <Thumbnail range={[2, 5]}>lil of both</Thumbnail>,
  <Thumbnail range={[5, 6]}>science</Thumbnail>,
];

// const VisibleArea = () => {
//   return <div class="m-5">{THUMBNAILS}</div>;
// };

export default App;
