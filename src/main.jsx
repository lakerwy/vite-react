import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {store} from '@/store';
import './style/data-flex.css'
import './tailwind.css'
import './style/index.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
          <RouterProvider router={Router} />
      </Provider>
)
