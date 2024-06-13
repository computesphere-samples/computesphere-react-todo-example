import TodoContainer from "./components/Todo/TodoContainer";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className='bg-watermark bg-cover'>
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App;
