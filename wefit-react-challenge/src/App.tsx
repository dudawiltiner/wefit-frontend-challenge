import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import AppRouter from './AppRouter'
import { GlobalStyle } from './GlobalStyle'
import { theme } from './theme'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
