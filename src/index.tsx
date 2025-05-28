import ReactDOM from 'react-dom/client';

import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
   <BrowserRouter>
      <ThemeProvider>
         <App />
      </ThemeProvider>
   </BrowserRouter>

)