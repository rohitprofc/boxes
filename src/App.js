import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Box = (props) => {
  const { className, boxName } = props;
  return <div className={className}>{boxName}</div>;
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4 shadow-lg">
          <h1 className="heading">Boxes</h1>
          <div className="box">
            <Box className="box1 box m-3" boxName="Small" />
            <Box className="box2 box m-3" boxName="Medium" />
            <Box className="box3 box m-3" boxName="Large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
