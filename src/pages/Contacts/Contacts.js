
import './Contacts.styled.css';




const Contacts = () => {
  return (
    <main class="section">
      <div class="container">
        <h1 class="title-1">Contacts</h1>
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Location</h2>
            <p>Ukraine, Dnipro</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+380977848586">+380977848586</a>
            </p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Email</h2>
            <p>
              <a href="maks1010d@gmail.com">maks1010d@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
