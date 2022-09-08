import { useState } from "react";

const GereoBoardDummy = () => {
  const [withinReach, setWithinReach] = useState(false);
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <div>
        <section>
          <div></div>
          <audio hidden src=""></audio>
        </section>
        <section>
          <div></div>
          <audio hidden src=""></audio>
        </section>
        <section>
          <div></div>
          <audio hidden src=""></audio>
        </section>
        <section>
          <div></div>
          <audio hidden src=""></audio>
        </section>
        <section>
          <div></div>
          <audio hidden src=""></audio>
        </section>
      </div>
      <section>
        <button onClick={setPlayState(true)}>Play</button>{" "}
        <button onClick={setPlayState(false)}>Pause</button>
      </section>
    </div>
  );
};

export default GereoBoardDummy;
