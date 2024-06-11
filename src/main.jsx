import ReactDOM from 'react-dom/client'
import {StoresProvider, stores} from '@/store';
import './style/data-flex.css'
import './tailwind.css'
import './style/index.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
      <StoresProvider value={stores}>
          <RouterProvider router={Router} />
      </StoresProvider>
)
