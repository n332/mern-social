import "./share.css"

import {PermMedia, Label, Room, EmojiEmotions} from  '@mui/icons-material';

export default function Share() {
  return (
    <div className="share" >
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/people/1.jpg" alt="" className="shareProfileImage" />
                <input placeholder="What's in your Ducky mind ?" className="shareInput" />
            </div>

            <hr className="shareHr"/>

            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shareIcon" ></PermMedia>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>

                    <div className="shareOption">
                        <Label className="shareIcon" ></Label>
                        <span className="shareOptionText">Tag</span>
                    </div>

                    <div className="shareOption">
                        <Room className="shareIcon" ></Room>
                        <span className="shareOptionText">Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions className="shareIcon" ></EmojiEmotions>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>

                <button className="shareButton">Quack!</button>
            </div>
        </div>
    </div>
  );
}
