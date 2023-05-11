import React,{Fragment, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'



const contacts_oll=[
    {
firstName: "Барней",
lastName: "Стинсовський",
phone: "+380956319521",
gender: "male"
}, {
firstName: "Робін",
lastName: "Щербатська",
phone: "+380931460123",
gender: "female"
}, {
firstName: "Анонімний",
lastName: "Анонімус",
phone: "+380666666666"
}, {
firstName: "Лілія",
lastName: "Олдровна",
phone: "+380504691254",
gender: "female"
}, {
firstName: "Маршен",
lastName: "Еріксонян",
phone: "+380739432123",
gender: "male"
}, {
firstName: "Теодор",
lastName: "Мотсбес",
phone: "+380956319521",
gender: "male"
    }]

function Contact(props) {
  return (
     <div className='contact'  >
      <p > Name: {props.firstName}</p>
      <p >LastName: {props.lastName}</p>
      <p >Phone: {props.phone}</p>
    </div>
  )
}

function Contacts() {
  const [contacts, satContacts] = useState(contacts_oll);
  const [find,setFind]=useState('')
  
  let element = [];
  

  contacts.forEach((el, i) => {
    
    element.push(
     <Contact firstName={ el.firstName} lastName={el.lastName} phone={el.phone} key={i} />
    )
  })
  
  function handleSearchChange(event) {
    setFind(event.target.value);

  satContacts(contacts_oll.filter(el =>  el.lastName.includes(find)))
      

  }
  return (
    <Fragment>
    <input placeholder='find name' className='find'  value={find}  onChange={(event)=>{(handleSearchChange(event))}}/>
      <div>{element}</div>
      </Fragment>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Contacts/>

);


