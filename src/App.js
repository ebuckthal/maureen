import React, { createContext, useContext, useState } from 'react';

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
    <div class="m-3">
      <SliderContextProvider>
        <Slider />
        <VisibleArea />
      </SliderContextProvider>
    </div>
  );
};

const Slider = () => {
  const [sliderValue, setSliderValue] = useContext(SliderContext);
  return (
    <div>
      <div class="pl-3 pr-3 ">
        <input
          className="nav-slider"
          type="range"
          min="0"
          max="6"
          value={sliderValue}
          onChange={e => setSliderValue(parseInt(e.currentTarget.value, 10))}
        />
      </div>
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

const Home = () => {
  return (
    <div class="max-w-md w-full lg:flex">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: 'https://tailwindcss.com/img/card-left.jpg',
        }}
        title="Woman holding a mug"
      />
      <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-grey-dark flex items-center">
            <svg
              class="fill-current text-grey w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div class="text-black font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-black leading-none">Jonathan Reinink</p>
            <p class="text-grey-dark">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const THUMBNAILS = [
  <Thumbnail range={[0, 2]}>illustration</Thumbnail>,
  <Thumbnail range={[2, 5]}>lil of both</Thumbnail>,
  <Thumbnail range={[3, 3]}>
    <Home />
  </Thumbnail>,
  <Thumbnail range={[5, 6]}>science</Thumbnail>,
];

const VisibleArea = () => {
  return <div class="m-5">{THUMBNAILS}</div>;
};

export default App;
