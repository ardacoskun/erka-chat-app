import Container from "./components/Container";
import { ChatContextProvider } from "./contexts/ChatContext";
import { LanguageContextProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ChatContextProvider>
      <LanguageContextProvider>
        <div className="App">
          <Container />
        </div>
      </LanguageContextProvider>
    </ChatContextProvider>
  );
}

export default App;
