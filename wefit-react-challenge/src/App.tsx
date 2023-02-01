import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import AppRouter from './AppRouter'
import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme/theme'

function App() {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
          <GlobalStyle />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
