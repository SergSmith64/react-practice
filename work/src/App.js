import React from "react";
// __ я добавил : __
// __ ПЕРЕНОШУ НИЖЕ API __
// import User from './User';

// __ я добавил : __
// __ ТЕПЕРЬ ОШИБКА: __ ERROR !!! ________________________
// 'photoJessica' is defined but never used no-unused-vars
// __ так как инфа и картинка грузится с сервера _________
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


  // __ И под конец, давайте обновим метод GET, чтобы получить данные с удаленного сервера __
  // __ let's update the GET method to get data from the remote server ______________________
  async componentDidMount() {
    // Load async data.
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture'
      }
    });
    // __ ПАРСИМ РЕЗУЛЬТАТЫ __
    userData = userData.data.results[0];

    // __ ОБНОВЛЯЕМ СТЕЙТ И РЕРЕНДЕРИМ НАШ КОМПОНЕНТ __
    const name = `${userData.name.first} ${userData.name.last}`;
    const avatar = userData.picture.large;
    const email = userData.email;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        avatar,
        email
      }
    });
  }
}
export default App;


