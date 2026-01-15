import { useState } from 'react'
import './App.css'

// export default function Myapp(){
//   return(
//     <div>
//       <h1>Welcome to my App!</h1>
//       <MyButton/>
      
//     </div>
//   )
 
// }
// function MyButton(){
//   return(
//     <button>I'm a button</button>
//   )
// }

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <img 
//     className="Avatar"
//     src={user.imageUrl}
//     alt={'Photo of ' + user.name} 
//     style={{
//       width: user.imageSize,
//       height: user.imageSize
//     }} />
//     </>
//   )
// }
// <Profile/>

// export default App

// function MyButton() {
//   return (
//     <button>I am a button</button>
//   );
// };

// function Image() {
//   return(
//     <img className='avatar' src="https://i.imgur.com/yXOvdOSs.jpg," alt="" />
//   )
// };
// export default function Myapp() {
//   return(
//     <div>
//       <h1>welcome to my app</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque, pariatur repellat rem ex itaque aut dicta nostrum nam rerum?</p>
//       <MyButton/>
//       <Image/>
//     </div>
//   );
// }

// profile 

// const user = {
//   name : "Bella hadid ",
//   imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize : 90,
// };

// export default function Profile(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <img 
//     className = "avatar"
//     src={user.imageUrl}
//     alt={"Photo of " + user.name} 
//     style = {{
//       width : user.imageSize,
//       height : user.imageSize
//     }}
//     />
//     </>
//   )
// }

// navbar component 

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '0.5rem 1rem',
//       backgroundColor: '#fff',
//       borderBottom: '1px solid #ccc',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <div style={{ flex: 1 }}></div> {/* Empty left section */}

//       <div style={{ flex: 5, textAlign: 'left', fontWeight: 'bold', fontSize: '1.5rem' }}>
//         haseeb
//       </div>

//       <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
//         <div style={{ position: 'relative' }}>
//           <input 
//             type="text" 
//             placeholder="Search" 
//             style={{
//               padding: '0.25rem 2rem 0.25rem 0.5rem',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               fontSize: '1rem'
//             }}
//           />
//           <span 
//             style={{
//               position: 'absolute',
//               right: '0.5rem',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               cursor: 'pointer',
//               color: '#666'
//             }}
//             aria-label="search icon"
//           >
//             🔍
//           </span>
//         </div>
//         <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>About</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// responding to events

// export default function Mybutton() {
//   function handleClick(){
//     alert("you clicked me")
//   }
//   return(
//     <button onClick={handleClick}>
//       Click Me

//     </button>
//   );
// }

// updating the screen

// export default function Myapp(){
//   const [count, setCount] = useState(0);
  
//   function handleClick(){
//     setCount(count + 1);
//   } 
  
//   return (
//     <div>
//       <h1>
//         Counters that update together
//       </h1>
//       <Mybutton count = {count} onClick= {handleClick}/>
//       <Mybutton count = {count} onClick= {handleClick}/>
//     </div>
//   );
// }
// function Mybutton({count, onClick}){
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   )
// }

// rendering list

// const fruits = [
//   {title: 'apple',isFruit: true, id: 1},
//   {title: 'banana',isFruit: true, id: 2},
//   {title: 'potato',isFruit: false, id: 3},
//   {title: 'tomato',isFruit: false, id: 4},
//   {title: 'cabbage',isFruit: false, id: 5},
//   {title: 'orange',isFruit: true, id: 6},
//   {title: 'mango',isFruit: true, id: 7},
// ];

// export default function Shop(){

//   const listItems = fruits.map(fruits =>
//     <li key={fruits.id}
//     style = {{
//       color : fruits.isFruit ? 'magenta' : 'darkgreen'
//     }}>
//       {fruits.title}
//    </li>
//   );
//   return (
//     <>
//     <h1>In the List "Dark Green" colored are "Vegetables" and "Magenta" colored are the "Fruits". </h1>
//     <ul>{listItems}</ul>
//     </>
//   );
// }

// Responding to an event

// export default function Mybutton(){
//   function handleClick(){
//     alert('you clicked me')
//   }
//   return(
//     <buttton onClick = {handleClick}>
//       Click me!
//     </buttton>
//   )
// }

// Updating the screen

// import the {useState} from 'react';

// export default function Myapp(){

//   return(
//     <div>
//       <h1>Counters that update separately.</h1>
//       <Mybutton/> <br/>
//       <Mybutton/><br/>

//       <Mybutton/><br/>

//       <Mybutton/><br/>

//     </div>
//   )
// }
// function Mybutton(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }
//   return(
//     <button onClick={handleClick}>
//       Clicked {count} Times
//     </button>
//   );
// };

// Using hooks sharing the data between the components
// Let's move the state up from the MyButton into MyApp

// export default function MyApp(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }
//   return(
//     <div>
//       <h1>Counters that update together.</h1>
//       <MyButton count={count} onClick={handleClick}/>
//       <MyButton count={count} onClick={handleClick}/>

//     </div>
//   );
// }
// function MyButton({count, onClick}){
//   return(
//     <button onClick = {onClick}>
//     Clicked {count} Times
//     </button>
//   )
// }

// PROPS in reactJs

// import and export in react
// default and named exports 

// import Gallery from './components/Gallery';
// import {Profiles} from './components/Gallery';

// export default function App() {
//   return(
//     // <Gallery/>
//     <>
    
//     <Profiles/>
//     <Profile/>
//     </>
//   )
// }

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// export function Profile() {
//   return (
//     <div 
//     style={{
        
//         marginBottom: 20,
//         border: '1px solid black',
//         padding: 10,
//         borderRadius: 5,
//         display: 'flex',
//         alignItems: 'center',
//         gap: 10,

//     }}>
//       <h1>{user.name}</h1>
//       <img className='avatar'
//        src={user.imageUrl}
//       alt={'photo of' + user.name} 
//       style={{
//         borderRadius: 50,
//         width: user.imageSize,
//         height: user.imageSize,
//       }}
      
//       />
//     </div>
//   )
// }

// function Article(){
//   return(
//     <article style={{
//       width: 450,
//       height: 200,
//       padding: 10,
//       margin: 15,
//       borderRadius: 10,
//       border: '1px solid ',
//     }}>
//       <h1>My first Component</h1>
//       <ol>
//         <li>Components: UI Building Blocks</li>
//         <li>Defining a Component</li>
//         <li>Using a Component</li>
//       </ol>
//     </article>
//   )
// }

// function Profile(){
//   return (
//     <img 
//     src="https://i.imgur.com/MK3eW3As.jpg" 
//     alt="Ktherine Jhonson" 
//     style={{
//       width: 90,
//       height: 90,
//       borderRadius: '50%',
//       marginLeft:20,
      
//         }}
//     />
//   );
// }

// export default function App() {
//   return (
//     <div style={{
//       width: 450,
//       height: 200,
//       padding: 10,
//       margin: 15,
//       borderRadius: 10,
//       border: '1px solid ',
//       display: 'block',
//     }}>
//       <h1>Amazing Scientists</h1>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Article/>
//     </div>  )
// }

// Remember
// React = an external library that helps us create interactive UI peices of websites.
// it lets us work on a chunks or small peices of the website at a time.





// // Lesson 2 exercises
// // 2a: return a paragraph with the text

// function Text(){
//   return(
//     <p>Hello, welcome to my website</p>
//   )
// }

// // 2b: Now add two buttons and use fragment to group it together

// function Buttons(){
//   return (
//     <>
//       <button>Login</button>
//       <button>Sign up</button>
//     </>
//   )
// }

// // 2c: add two text boxes above the buttons

// function TextBoxes(){
//   return(
//     <div>
//       <input 
//         type="text" 
//         placeholder='Email'
//       /><br />
//       <input 
//         type="password" 
//         placeholder='Password'
//       /><br />
//     </div>
//   )
// }

// // 2d : create LoginForm

// function LoginForm(){
//   return(
//     <>
//       <Text />
//       <TextBoxes />
//       <Buttons />
      
//     </>
//   )

// }


// export default function App(){
//   return(
//     <LoginForm />
//   )
// }


// 2e : ecomerce app, add product deatail

// function ProductDetails({props}){
//   return(
//     <div>
//       <h2>Cotton Socks</h2>
//       <h2>Price: $10.99 </h2>
//       <button>Add to Cart</button>
//     </div>
//   )
// }

// function ProductSocks(){
//   return (
//     <div>
//       <h2>Cotton Socks</h2>
//       <h2>Price: $10.99 </h2>
//       <button>Add to Cart</button>
//     </div>
//   )
// }

// 2f : display 2 more products

// function Products({ name, price }){
//   //const name = props.name; // destructuring 
//   //const { name } = props;// this code is same as above one
//   //const price = props.price;
//   //const { price } = props;
  

//   return(
//     <div style= {{
//       border: '1px solid white',
//       borderRadius: 5,
//       padding: 10,
//       marginBottom: 10,
//       width: 200,

//     }}>
//       <h2>{ name }</h2>
//       <h1>Price: ${ price }</h1>
//       <button>Add to Cart</button>
//     </div>
//   )
// }

// export default function App(){
//   return(
//     <>
//       <Products name="Cotton Socks" price = "10.90" />
//       <Products name="Tennis Balls" price = "6.00" />
//       <Products name="T-shirt" price = "7.99" />
//     </>
//   )
// }


// 2g : continue the 2f

// function ProductDetails({ name, price, discountPrice }){
//   // const name = props.name;
//   // const {name} = props;
//   // const price = props.price;
//   // const {price} = props;
//   return(
//     <div style={{
//       border: '1px solid white',
//       borderRadius: 5,
//       padding : 10,
//       width: 300,
//       marginBottom: 10,

//     }}>
//       <h2>{ name }</h2>
//       <h2>price: ${ price }</h2>
//       {discountPrice && <h2> Discount Price: ${discountPrice}</h2>}
//       {/* <h2>Discount Price: ${discountPrice}</h2> */}
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <ProductDetails name="Cotton Socks" price = "10.90" discountPrice = "5.45" />
//       <ProductDetails name="Tennis balls" price = "6.00"/>
//       <ProductDetails name="T-Shirt" price = "7.99"/>
//     </>
//   )
// }


// 2h : continue 2g and cross out the Original price

// function ProductDetails({ name, price, discountPrice }){
//   // const name = props.name;
//   // const {name} = props;
//   // const price = props.price;
//   // const {price} = props;
//   return(
//     <div style={{
//       border: '1px solid white',
//       borderRadius: 5,
//       padding : 10,
//       width: 300,
//       marginBottom: 10,

//     }}>
//       <h2>{ name }</h2>
//       {/* <h2>price: ${ price }</h2> */}
//       {discountPrice && <h2><del>price: ${price}</del></h2>} {
//         <h2> Discount Price: ${discountPrice}</h2>
//       }
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <ProductDetails name="Cotton Socks" price = "10.90" discountPrice = "5.45" />
//       <ProductDetails name="Tennis balls" price = "6.00" discountPrice = "3.00"/>
//       <ProductDetails name="T-Shirt" price = "7.99" discountPrice = "3.99"/>
//     </>
//   )
// }

// 2i : continue 2h and use ternary operator

function ProductDetails({ name, imageSrc, price, discountPrice }){
  // const name = props.name;
  // const {name} = props;
  // const price = props.price;
  // const {price} = props;
  return(
    <div style={{
      border: '1px solid white',
      borderRadius: 5,
      padding : 10,
      width: 300,
      marginBottom: 10,

    }}>
      <img src={imageSrc} alt={name} width="150" />
      <h2>{ name }</h2>
      
      {/* <h2>price: ${ price }</h2>
      {discountPrice && <h2><del>price: ${price}</del></h2>} {
        <h2> Discount Price: ${discountPrice}</h2>
      } */}
      {discountPrice ? (
        <>
          <h2><del>Price: ${price}</del></h2>
          <h2>Discount Price: ${discountPrice}</h2>
        </>
      ) : (
        <h2>Price: ${price}</h2>
      )}

      <button>Add to Cart</button>
    </div>
  );
}

export default function App(){
  return(
    <>
      <ProductDetails name="Cotton Socks"  price = "10.90" discountPrice = "5.45" imageSrc= "./src/assets/cotton-socks.png" />
      <ProductDetails name="Tennis balls" price = "6.00" imageSrc= "./src/assets/tennis-balls.png"/>
      <ProductDetails name="T-Shirt" price = "7.99" discountPrice = "3.99" imageSrc="./src/assets/plain-t-shirt.png" />
    </>
  )
}