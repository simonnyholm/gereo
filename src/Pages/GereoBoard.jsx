import { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";

import audioFileA from "../audio/audioA.m4a";
import audioFileB from "../audio/audioB.m4a";
import audioFileC from "../audio/audioC.m4a";
import audioFileD from "../audio/audioD.m4a";
import audioFileX from "../audio/audioX.m4a";

const GereoBoard = () => {
  const [withinReach, setWithinReach] = useState(false);
  const [playState, setPlayState] = useState(false);

  const playerA = useRef();
  const [volPlayerA, setVolPlayerA] = useState(0.2);

  const playerB = useRef();
  const [volPlayerB, setVolPlayerB] = useState(0.9);

  const playerC = useRef();
  const [volPlayerC, setVolPlayerC] = useState(0.2);

  const playerD = useRef();
  const [volPlayerD, setVolPlayerD] = useState(0.2);

  const playerX = useRef();
  const [volPlayerX, setVolPlayerX] = useState(0.2);

  const pressPlay = () => {
    playerA.current.audio.current.play();
    playerB.current.audio.current.play();
    playerC.current.audio.current.play();
    playerD.current.audio.current.play();
    playerX.current.audio.current.play();
  };

  const pressPause = () => {
    playerA.current.audio.current.pause();
    playerB.current.audio.current.pause();
    playerC.current.audio.current.pause();
    playerD.current.audio.current.pause();
    playerX.current.audio.current.pause();
  };

  return (
    <div>
      <h1>Walk and listen.</h1>
      <section>
        <h2>GereoSpeakers</h2>
        <div>
          <div>A</div>
          <input
            onChange={(event) => {
              setVolPlayerA(event.target.value);
            }}
            type="range"
            name="RangeplayerA"
            id="volume"
            max={1.0}
            min={0.0}
            step={0.1}
            value={1.0}
          />
          <div>
            {" "}
            <AudioPlayer
              className="playerA"
              src={audioFileA}
              onPlay={(e) => {
                console.log("playerA");
              }}
              ref={playerA}
              showSkipControls={true}
              customVolumeControls={[]}
              volume={volPlayerA}
              customAdditionalControls={[]}
              customIcons={{
                play: (
                  <IoPlaySharp
                    /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                    size={90}
                  />
                ),
                pause: <IoPauseSharp size={90} />,
              }}

              // other props here
            />
          </div>
        </div>
        <div>B</div>
        <div>
          {" "}
          <AudioPlayer
            className="PlayerB"
            src={audioFileB}
            onPlay={(e) => {
              console.log("playerB");
            }}
            ref={playerB}
            showSkipControls={true}
            customVolumeControls={[]}
            volume={volPlayerB}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <IoPlaySharp
                  /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                  size={90}
                />
              ),
              pause: <IoPauseSharp size={90} />,
            }}

            // other props here
          />
        </div>
        <div>C</div>
        <div>
          {" "}
          <AudioPlayer
            className="playerC"
            src={audioFileC}
            onPlay={(e) => {
              console.log("playerC");
            }}
            ref={playerC}
            showSkipControls={true}
            customVolumeControls={[]}
            volume={volPlayerC}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <IoPlaySharp
                  /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                  size={90}
                />
              ),
              pause: <IoPauseSharp size={90} />,
            }}

            // other props here
          />
        </div>
        <div>D</div>
        <div>
          {" "}
          <AudioPlayer
            className="playerD"
            src={audioFileD}
            onPlay={(e) => {
              console.log("playerD");
            }}
            ref={playerD}
            showSkipControls={true}
            customVolumeControls={[]}
            volume={volPlayerD}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <IoPlaySharp
                  /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                  size={90}
                />
              ),
              pause: <IoPauseSharp size={90} />,
            }}

            // other props here
          />
        </div>
        <div>X</div>
        <div>
          {" "}
          <AudioPlayer
            className="playerX"
            src={audioFileX}
            onPlay={(e) => {
              console.log("playerX");
            }}
            ref={playerX}
            showSkipControls={true}
            customVolumeControls={[]}
            volume={volPlayerX}
            customAdditionalControls={[]}
            customIcons={{
              play: (
                <IoPlaySharp
                  /*color="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"*/
                  size={90}
                />
              ),
              pause: <IoPauseSharp size={90} />,
            }}

            // other props here
          />
        </div>
      </section>
      <section>
        <h2>Controls</h2>
        <div className="pt-1">
          {!playState && (
            <button
              className="pt-2"
              onClick={(event) => {
                setPlayState(true);
                pressPlay();
              }}
            >
              <IoPlay className="dark:text-white" size="25" />
            </button>
          )}
          {playState && (
            <button
              className="pt-2"
              onClick={(event) => {
                setPlayState(false);
                pressPause();
              }}
            >
              <IoPause className="dark:text-white" size="25" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default GereoBoard;
