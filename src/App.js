import Address from "./component/Address";
import FullName from "./component/FullName";
import ProfilePhoto from "./component/ProfilePhoto";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ProfilePhoto />
      <Address />
      <FullName />
    </div>
  );
};

export default App;
