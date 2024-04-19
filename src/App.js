import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState, createContext, useEffect } from 'react'
import List from './routes/List'
import array_1 from './data/Array_1.json'
import array_2 from './data/Array_2.json'

import { Home } from './routes/Home'

export const AppContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  const [state, setState] = useState(null)
  const mergeArrays = (arr1, arr2) => {
    const mergedArray = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const obj = arr1[i];
        let found = false;
        
        for (let j = 0; j < mergedArray.length; j++) {
            if (mergedArray[j].id === obj.id) {
                found = true;
                break;
            }
        }
        if (!found) {
            mergedArray.push(obj);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const obj = arr2[i];
        let found = false;
        
        
        for (let j = 0; j < mergedArray.length; j++) {
            if (mergedArray[j].id === obj.id) {
                found = true;
                break;
            }
        }
        if (!found) {
            mergedArray.push(obj);
        }
    }
    
    return mergedArray;
}


const arraySwitcher = (Array) => {
  for (let i = 0; i< Array.length - 1; i += 2){
    if(Array[i] < 0) return Array[i] = 0;
    const temp = Array[i];
    Array[i] = Array[i + 1];
    Array[i + 1] = temp;
    console.log(Array)
  }
 }


  useEffect(()=> {
    setState(mergeArrays(array_1, array_2))
    arraySwitcher([1,2,3,4,-5,6])
  },[])






  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
