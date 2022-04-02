import "styles/reset.css"
import "styles/index.css"

import { ApolloProvider } from "@apollo/client"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./app"
import { GitHubClient } from "./api/client"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ApolloProvider client={new GitHubClient()}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
