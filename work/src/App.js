import React from "react";
// __ я добавил : __
// __ ПЕРЕНОШУ НИЖЕ API __
// import User from './User';

// __ я добавил : __
import photoJessica from './Jessica.png';

// __ теперь загрузим "реальные" данные с помощью асинхронного запроса __
//  __ load the "real" data using an asynchronous request _______________

import API from './utils/API';
// __ переношу СЮДА! __
import User from './User';

class App extends React.Component {
  // __ добавляем ПЕРЕД рендером __
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }


  render() {
    // __ добавляем ___
    const { isLoading, name, avatar, email } = this.state;

    // return <User name="Jessica Doe" avatar="..." email="hello@jessica.com" />;
    return (
      // <User name="Jessica Doe" avatar={photoJessica} email="hello@jessica.com" />;
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }
  // __ добавляем __
  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
  }
}
export default App;


