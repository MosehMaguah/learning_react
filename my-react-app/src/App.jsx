import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from './Button.jsx'
import ProfilePic from "./ProfilePic.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColorPicker from "./ColorPicker.jsx";

function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 95 },
    { id: 2, name: "orange", calories: 100 },
    { id: 3, name: "watermelon", calories: 30 },
    { id: 4, name: "apple", calories: 200 },
    { id: 5, name: "pineapple", calories: 170 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 195 },
    { id: 7, name: "celery", calories: 10 },
    { id: 8, name: "carrots", calories: 304 },
    { id: 9, name: "corn", calories: 206 },
    { id: 0, name: "broccoli", calories: 17 },
  ];

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} />

      <ColorPicker/>

      <Counter/>

      <OnChange/>

      <Button />
      <ProfilePic/>

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}

      <Home />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Eugene Crabs" age={60} isStudent={false} />
      <Student name="Patrick" age={27} isStudent={false} />
      <Student name="Sandy Cheeks" age={25} isStudent={false} />
      <Student />
      <Card />
      <Footer />
    </>
  );
}

export default App;
