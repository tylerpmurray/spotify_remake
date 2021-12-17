import device from "../control_icons/device.png";
import expand from "../control_icons/expand.png";
import microphone from "../control_icons/microphone.png";
import queue from "../control_icons/queue.png";
import volume from "../control_icons/volume_speaker.png";

const ExtraControls = () => {
  return (
    <div className="extra-controls">
      <img src={microphone} alt="microphone" />
      <img src={queue} alt="queue" />
      <img src={device} alt="device" />
      <img src={volume} alt="volume" />
      <img src={expand} alt="expand" />
    </div>
  );
};

export default ExtraControls;
