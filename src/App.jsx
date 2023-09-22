import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { selectDefaultImage } from './store/slices/defaultImage'

function App() {
  const API_KEY = 'rSIq16GPayNofWrYtuNWZXMSk_dGVRh9zt4wuJap880'
  const API_URL = 'https://api.unsplash.com'

  const [result, setResult] = useState('')
  const defaultImg = useSelector(selectDefaultImage)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/search/photos?page=1&per_page=15&query=programming&client_id=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (defaultImg) {
      fetchData();
    }
  }, []);
  // console.log(result.results);
  return (
    
      <div className='flex flex-wrap justify-evenly gap-4 mt-3'>
        {
          result.results && result.results.map((el) => {
            return (
              <div key={Math.random()} className='h-[300px] flex flex-wrap gap-4 shadow-[0_35px_60px_rgba(0,0,0,0.3)] relative mx-auto w-1/4 group '>
                <img src={el.urls.small} className='object-cover block h-[300px] ' />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 overflow-hidden w-full h-0 transition-all duration-500 group-hover:h-full">
                  <h1 className="w-full mt-12 text-white text-4xl text-center transform  absolute">Programming</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    
  )
}

export default App
