# React Modality

Styleguide:
https://rsoury.github.io/react-dynamic-sheet/

React Dynamic Sheet is react component to provide mobile users an app like, swipeable Bottom Sheet and desktop users a Modal Dialog. 

#### What does it look like?
![Demonstration of Sheet on Mobile](https://media.giphy.com/media/kcUcYwklHAE4BEdo43/giphy.gif)


## Get started

### Quick start

#### npm
```
npm install react-modality
```

#### yarn
```
yarn add react-modality
```

```jsx
import ModalSheet from 'react-modality';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={()=> setIsOpen(!isOpen)}>Show Modal</button>
      <ModalSheet isOpen={isOpen} setIsOpen={setIsOpen}>
        <H1>My Content</h1>
      </ModalSheet>
    </>
  );
}
```
