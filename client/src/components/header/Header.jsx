import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Blockchain mag.</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://miro.medium.com/max/745/1*Jevz6S9lFr9inTF9oCMUbg.jpeg"
        alt=""
      />
    </div>
  );
}
